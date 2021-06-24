import React, { useState } from 'react';

import '../Styling/TodoListForm.css'

const TodoListForm = (props) => {

    const [todo, setTodo] = useState({
        title: '',
        content: ''
    })

    const handleTodo = (e) => {
        const {name, value} = e.target
        setTodo((prevValue) => {  
            return{
                ...prevValue,
                [name]:value
            }
         })
    }

    const handleSubmit = () => {
        props.todoItem(todo)
        setTodo({
            title:'',
            content:''
        })
        return;
    }


    return(
        <form>
            <div className='todo-list-form'>
                <label>Title</label>
                <input type='text' onChange={handleTodo} value={todo.title} name='title'></input>
                <label>Content</label>
                <textarea type='text' onChange={handleTodo} value={todo.content} name='content'></textarea>
            </div>
            <button type='button' onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default TodoListForm