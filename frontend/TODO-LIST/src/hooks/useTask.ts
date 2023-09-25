import { useEffect, useState } from "react";
import { Task } from "../types/Task";
import axios, { AxiosResponse } from "axios";

export default function useTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTask, setFilteredTask] = useState<Task[]>([]);

  function addNewTask(task: Task) {
    setTasks(prev => [...prev, task]);
    setFilteredTask(prev => [...prev, task])
  }

  async function clearCompleted() { 
    try {
      const response: AxiosResponse<Task> = await axios.delete('http://localhost:3001/clear');
      if (response.status === 204) {
          setFilteredTask((prev) => prev.filter(task => task.status === 1));
          setTasks((prev) => prev.filter((currentTask) => currentTask.status === 1));
      }
    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }
  }

  function deleteTask(id: string) {
    setTasks(prev => prev.filter(task => task._id !== id)); // retorna os que forem diferentes do deletado
    setFilteredTask(prev => prev.filter(task => task._id !== id));
  }

  function updateStates(prev: Task[], id: string, status: boolean) {
    return prev.map(currentTask => {
        if (currentTask._id === id) {
          const updatedTask = {
            ...currentTask,
            status: status ? 2 : 1
          }
          // se tiver sucesso ele completa o input com valor de 2 ou 1 dependndo, o deixando pronto para excluir ou não de acordo com o ternário
          return updatedTask;
        }
        return currentTask;
      })
    
  }

  function updateStatus(id: string, status: boolean) {
    setTasks(prev => updateStates(prev, id, status))

    setFilteredTask(prev => updateStates(prev, id, status))
  }

  const handleAllTasks = () => {
    setFilteredTask(tasks)
  };

  const handleActiveTasks = () => {
      setFilteredTask(tasks.filter(currentTask => currentTask.status === 1))
  };

  const handleCompletedTasks = () => {
      setFilteredTask(tasks.filter(currentTask => currentTask.status === 2))
  };

  useEffect(() => { // atualizar sempre que tiver uma task nova
    const fetchTasks = async () => {
        try {
            const response: AxiosResponse<Task[]> = await axios.get('http://localhost:3001/');
            if (response.status === 200) {
                const loadedTasks: Task[] = response.data;
                setTasks(loadedTasks);
                setFilteredTask(loadedTasks)
            }
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    };

    fetchTasks();
}, []);

return {tasks, filteredTask, addNewTask, clearCompleted, deleteTask, updateStatus, handleAllTasks, handleActiveTasks, handleCompletedTasks}
}