import React from "react";
import {Todo} from '../types'

interface ITodoItem extends Todo{
    style?: React.CSSProperties,
    isChange: (id: string) => void,
    handleDeleteTodo: (id: string) => void
}

const TodoItem = ({id, title, completed, isChange, handleDeleteTodo}: ITodoItem) => {
    return(
        <li className={'flex flex-wrap justify-between items-center border rounded p-2'}>
            <input type={"checkbox"} checked={completed} onChange={() => isChange(id)} />
            <span>{title}</span>
            <button className={'bg-red-400 px-1 rounded text-white text-center'} onClick={() => handleDeleteTodo(id)}>&times;</button>
        </li>
    )
}


export default TodoItem;