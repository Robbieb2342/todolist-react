import React from 'react';

import '../Styling/TodoListForm.css'

const TodoListForm = () => {
    return(
        <form>
            <div className='todo-list-form'>
                <label>Title</label>
                <input type='text'></input>
                <label>Content</label>
                <input type='text'></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default TodoListForm