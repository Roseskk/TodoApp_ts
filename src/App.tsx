import React, {useEffect, useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";

import {Todo} from './types';
import NewTodoForm from "./components/NewTodoForm";


function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [formValue, setFromValue] = useState<string>('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then((data: Todo[]) => {
                setTodos(data)
            })
    },[])

    const handleChange = (id: string) => {
        const completedArray =todos.map((todo) => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })
        setTodos(completedArray)
    }

    const handleTodoCreate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFromValue(event.target.value)
    }

    const handleClick = () => {
        if (formValue.length === 0) return
        setTodos([{id: new Date().toString(), title: formValue, completed: false}, ...todos])
        setFromValue('')
    }

    const handleDeleteTodo = (id: string) => {
        setTodos([...todos.filter((item) => item.id !== id)])
    }

    return (
        <div className="max-w-[1080px] p-2 bg-white rounded mx-auto flex flex-col gap-2 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] overflow-y-scroll overflow-x-scroll  h-96">
            <h1 className={'text-2xl text-center font-bold'}>TODO APP</h1>
            <NewTodoForm handleClick={handleClick} inputChange={handleTodoCreate} value={formValue} />
            <TodoList data={todos} isChange={handleChange} handleDeleteTodo={handleDeleteTodo} />
        </div>
    );
}

export default App;
