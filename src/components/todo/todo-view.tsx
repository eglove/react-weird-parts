import {centerAllTheThings} from "../../App";
import React, {ChangeEvent, FormEvent} from "react";
import {Todos} from "./types";
import styles from './todo.module.css';

type TodoViewProperties = {
    handleAddTodo: (event: FormEvent<HTMLFormElement>) => void,
    handleTodoChange: (event: ChangeEvent<HTMLInputElement>) => void,
    handleFilterChange: (event: ChangeEvent<HTMLInputElement>) => void,
    todos: Todos,
}

export const TodoView = ({handleAddTodo, handleTodoChange, handleFilterChange, todos}: TodoViewProperties): JSX.Element => {
    return (
        <div style={{...centerAllTheThings, width: '300px'}}>
            <p>My ToDo List</p>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="newTodo">ToDo</label>:{' '}
                <input onChange={handleTodoChange} type="text" name="newTodo"/>
                <br/>
                <br/>
                <button type='submit'>Add</button>
            </form>
            <br/>
            <form>
                <label htmlFor="filter">Filter</label>:{' '}
                <input onChange={handleFilterChange} type="text" name="filter"/>
            </form>
            <div className={styles.TodoListContainer}>
                {todos.map((todo) => {
                    return <div key={todo.id}>{todo.title}</div>
                })}
            </div>
        </div>
    )
}
