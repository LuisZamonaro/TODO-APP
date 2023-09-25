import { useState, useMemo } from 'react';

import * as S from './styles'
import { useMode } from '../../context/ModeStyleContext';
import { Task } from '../../types/Task';

interface TodoOptions {
    task: Task[]
    onFilterAll: () => void
    onFilterActive: () => void
    onFilterCompleted: () => void
    onClear: () => void
}

const TodoOptions = ({task, onFilterAll, onFilterActive, onFilterCompleted, onClear} : TodoOptions) => {
    const {mode} = useMode()
    const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed'>('all');

    const itemsLeft = useMemo(() => {
        return task.filter((task) => task.status !== 2).length;
    }, [task]);

    return (
        <S.Container
            mode={mode}>
            <div className="left">{itemsLeft} items left</div>
            <div className="center">
                <div
                    className={`all ${activeFilter === 'all' ? 'active-button' : ''}`}
                    onClick={() => {
                        setActiveFilter('all');
                        onFilterAll();
                    }}
                >
                    all
                </div>
                <div
                    className={`active ${activeFilter === 'active' ? 'active-button' : ''}`}
                    onClick={() => {
                        setActiveFilter('active');
                        onFilterActive();
                        console.log('handleActiveTasks')
                    }}
                >
                    active
                </div>
                <div
                    className={`completed ${activeFilter === 'completed' ? 'active-button' : ''}`}
                    onClick={() => {
                        setActiveFilter('completed');
                        onFilterCompleted();
                        console.log('handleCompletedTasks')
                    }}
                >
                    completed
                </div>
            </div>
            <div className="right" onClick={() => onClear()}>
                Clear Completed
            </div>
        </S.Container>
    )
}

export default TodoOptions