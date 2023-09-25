import * as S from './styles'
import { Task } from '../../types/Task';
import { useState } from 'react'
import { useMode } from '../../context/ModeStyleContext';
import iconDelete from '../../images/icon-cross.svg'

interface Props {
    task: Task
    onDelete: (id: string) => void
    onUpdate: (id: string, status: boolean) => void;
}

export default function Chore({ task, onDelete, onUpdate }: Props) {
    const [status, setStatus] = useState<boolean>(task.status === 2);
    const { mode } = useMode()

    const handleDeleteTask = async (id: string) => { // deleta tasks individuais
        onDelete(id)
    };

    const handleStatus = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.checked)
        onUpdate(task._id, e.target.checked)
    }

    return (
        <S.IndividualChore key={task._id}
            mode={mode}>
            <S.InputCheck />
            <label>
                <input checked={status} onChange={handleStatus} className='teste' type="checkbox" />
                <span></span>
            </label>
            {task.message} <img className='iconDelete' src={iconDelete} onClick={() => handleDeleteTask(task._id)}/>
        </S.IndividualChore>
    )
}