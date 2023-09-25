import { useMemo, useState } from "react";
import { useMode } from "../../context/ModeStyleContext";
import * as S from './styles'
import { Task } from "../../types/Task";

interface TodoOptions {
    task: Task[]
    onFilterAll: () => void
    onFilterActive: () => void
    onFilterCompleted: () => void
    onClear: () => void
}

const TodoOptionsMobile = ({task, onFilterAll, onFilterActive, onFilterCompleted, onClear} : TodoOptions) => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed'>('all');

    const { mode} = useMode()

    const itemsLeft = useMemo(() => {
        return task.filter((task) => task.status !== 2).length;
    }, [task]);

    return (
        <>
            <S.TodoOptionsMobile1>
                <S.WrapperTodoOptionsMobile1 mode={mode}>
                    <div className="left">
                        {itemsLeft} items left
                    </div>
                    <div className="right" onClick={onClear}>
                        Clear Completed
                    </div>
                </S.WrapperTodoOptionsMobile1>
            </S.TodoOptionsMobile1>
            <S.TodoOptionsMobile2>
                <S.WrapperTodoOptionsMobile2 mode={mode}>
                    <div
                        className={`all ${activeFilter === 'all' ? 'active-button' : ''}`}
                        onClick={() => {
                            setActiveFilter('all');
                            onFilterAll();
                        }}
                    >
                        All
                    </div>

                    <div
                        className={`active ${activeFilter === 'active' ? 'active-button' : ''}`}
                        onClick={() => {
                            setActiveFilter('active');
                            onFilterActive();
                        }}
                    >
                        Active
                    </div>

                    <div
                        className={`completed ${activeFilter === 'completed' ? 'active-button' : ''}`}
                        onClick={() => {
                            setActiveFilter('completed');
                            onFilterCompleted();
                        }}
                    >
                        Completed
                    </div>
                </S.WrapperTodoOptionsMobile2>
            </S.TodoOptionsMobile2>
        </>
    )
}

export default TodoOptionsMobile