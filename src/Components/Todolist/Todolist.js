import React, { useState } from 'react';
import TodoListForm from './TodolistForm'
import TodoListItem from './TodoListItem'
import '../Styling/TodoList.css'


const TodoList = () => {

    const [newTodo, setNewTodo] = useState([])

    const handleTodoItem = (todo) => {
        setNewTodo((prevTodos) => {
            return[todo, ...prevTodos]
        })   
    }

    const handleDeleteItem = (id) => {
        setNewTodo((prevTodos) => {
            return prevTodos.filter((item, index) => {
                return index !== id
            })
        })
        
    }
    
    return(
        <div className='todolist'>
            <TodoListForm todoItem={handleTodoItem} /> 
            {newTodo.map((todo, index) => (

            <TodoListItem 
            key={Math.random()}
            id={index}
            title={todo.title}
            content={todo.content}
            onDelete={handleDeleteItem}
            />
            ))}
        </div>
    )
}

export default TodoList