import React from "react"

function TodoItem(props) {
   
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.completed}
                onChange={() => props.handleChange(props.id)}
            />
            <p style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
                Task: {props.task}
            </p>
        </div>
    )
}

export default TodoItem