import React from 'react';
import '../Styling/TodoListItem.css'

const TodoListItem = props => {

    const handleClick = () => {
        props.onDelete(props.id)
    }    
    
    return(
        <div className='todo-list-item'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default TodoListItem