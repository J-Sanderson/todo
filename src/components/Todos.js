import React from 'react'

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length
        ? (
            <ul>
            {
                todos.map(todo => {
                    return (   
                        <li key={todo.id}>
                            <span className="item-name">{todo.content}</span>
                            <button className="item-remove" title="Remove item" onClick={() => {deleteTodo(todo.id)}}>X</button>
                        </li>
                    )
                })
            }
            </ul>
        ) : (
                <p className="center">You have no todos left, yay!</p>
            );

    return (
        <div className="todos collection">
            {todoList}
        </div>
    );
}

export default Todos;