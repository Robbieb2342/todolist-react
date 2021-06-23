import React from 'react';


const TodoListItem = props => {

    const newTodoItemTitle = props.data.map((todo) => todo.title)
    const newTodoItemContent = props.data.map((todo) => todo.content)
    
    return(<>
        <h1>{newTodoItemTitle}</h1>
        <p>{newTodoItemContent}</p>
        </>
    )
}

export default TodoListItem