import React from 'react';
import TodoListForm from './TodolistForm'
import '../Styling/TodoList.css'

const TodoList = () => {
    return(
        <div className='todolist'>
            <TodoListForm /> 
        </div>
    )
}

export default TodoList