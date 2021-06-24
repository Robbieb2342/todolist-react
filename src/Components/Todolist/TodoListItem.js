import React from 'react';
import '../Styling/TodoListItem.css'

const TodoListItem = props => {

    const handleClick = () => {
        props.onDelete(props.id)
    }    
    
    return(
        <div className='todo-list-item'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button className='deleteBtn' onClick={handleClick}>Delete</button>
        </div>
    )
}

export default TodoListItem