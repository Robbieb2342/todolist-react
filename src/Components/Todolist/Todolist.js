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
    
    return(
        <div className='todolist'>
            <TodoListForm todoItem={handleTodoItem} /> 
            <TodoListItem data={newTodo}/>
        </div>
    )
}

export default TodoList