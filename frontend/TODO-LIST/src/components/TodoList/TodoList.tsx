import React, { useState} from 'react';
import * as S from './styles';
import iconSun from '../../images/icon-sun.svg';
import iconMoon from '../../images/icon-moon.svg'
import axios, { AxiosResponse } from 'axios';
import { Task } from '../../types/Task';
import Chore from '../Chore';
import useTask from '../../hooks/useTask';
import { useMode } from '../../context/ModeStyleContext';
import TodoOptions from '../TodoOptions';
import TodoOptionsMobile from '../TodoOptionsMobile';

const TodoList: React.FC = () => {
    const [newTaskText, setNewTaskText] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const { mode, setMode } = useMode()

    const {
        tasks,
        filteredTask,
        addNewTask,
        deleteTask,
        updateStatus,
        handleAllTasks,
        handleActiveTasks,
        handleCompletedTasks,
        clearCompleted
    } = useTask();

    const handleAddTask = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!newTaskText) {
            return;
        }

        if (e.key !== 'Enter') return;

        try {
            const response: AxiosResponse<Task> = await axios.post('http://localhost:3001/', {
                message: newTaskText,
                status: isChecked ? 2 : 1,
                isDeletable: true,
            });

            if (response.status === 201) {
                const newTask: Task = response.data;
                setNewTaskText('');
                addNewTask(newTask);
                setIsChecked(false);
            }
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
        }
    };

    const handleDeleteTask = async (id: string) => {
        try {
            const response: AxiosResponse<void> = await axios.delete(`http://localhost:3001/${id}`);
            if (response.status === 204) {
                deleteTask(id);
            }
        } catch (error) {
            console.error('Erro ao excluir tarefa:', error);
        }
    }

    const handleUpdateStatusTask = async (id: string, status: boolean) => {
        try {
            const response: AxiosResponse<void> = await axios.patch(`http://localhost:3001/${id}`, {
                status: status ? 2 : 1
            });

            if (response.status >= 200 && response.status < 300) {
                updateStatus(id, status);
                console.log('mudou')
            }
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
        }
    }

    return (
        <S.Container>
            <S.Wrapper>
                <S.TodoAndStyleMode
                    mode={mode}>
                    <div className="TODO">TODO</div>
                    <div className="iconSun">
                        <img id='iconSun' src={iconSun} alt="Sun" onClick={() => setMode(prev => !prev)} />
                    </div>
                    <div className="iconMoon">
                        <img id='iconMoon' src={iconMoon} alt="Moon" onClick={() => setMode(prev => !prev)} />
                    </div>
                </S.TodoAndStyleMode>
                <S.CreateNewTodo
                    mode={mode}>
                    <S.InputCheck />
                    <div className="createNew">
                        <label>
                            <input className='teste' type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                            <span></span>
                        </label>
                        <input
                            onChange={(e) => setNewTaskText(e.target.value)}
                            value={newTaskText}
                            onKeyDown={handleAddTask}
                            className="inputCreate"
                            type="text"
                            placeholder="Create a new todo..."
                        />
                    </div>
                </S.CreateNewTodo>
                {filteredTask && (
                    <S.Chores
                        mode={mode}>
                        {filteredTask.map((task) => (
                            <Chore task={task} onDelete={handleDeleteTask} onUpdate={handleUpdateStatusTask} key={task._id} 
                            />
                        ))}
                    </S.Chores>
                )}
                <TodoOptions task={tasks} onFilterAll={handleAllTasks} onFilterActive={handleActiveTasks} onFilterCompleted={handleCompletedTasks} onClear={clearCompleted}/>
                <TodoOptionsMobile task={tasks} onFilterAll={handleAllTasks} onFilterActive={handleActiveTasks} onFilterCompleted={handleCompletedTasks} onClear={clearCompleted}/>
            </S.Wrapper>
        </S.Container>
    );
};

export default TodoList;
