import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
    const { id, content } = props;

    const [todoFinished, setTodoFinished] = useState(false);
    const handleFinished = () => {
        setTodoFinished(() => !todoFinished);
    };
    return (
        <div
            className="todo-item"
            onClick={() => handleFinished()}
        >
            <p
                className="todo-text"
                style={{textDecoration: todoFinished ? "line-through" : "none",}}
            >
                {content}
            </p>
            <button
                onClick={() => {props.removeTodo(id)}}
                className="deleteBtn"
            >
                Delete
            </button>
        </div>
    );
}

export default Todo;
