import React from 'react';
import {Todo} from "../types";
import TodoItem from "./TodoItem";

type TodoComponent = {
    data: Todo[],
    isChange: (id: string) => void,
    handleDeleteTodo: (id: string) => void
}

const TodoList = ({ data, isChange, handleDeleteTodo }: TodoComponent) => {
    return(
        <ul className={'flex flex-col gap-2 w-full'}>
            {
                data.map((todo) => {
                    return(
                        <TodoItem key={todo.id} isChange={isChange} id={todo.id} title={todo.title} completed={todo.completed} handleDeleteTodo={handleDeleteTodo} />
                    )
                })
            }
        </ul>
    )
}

export default TodoList