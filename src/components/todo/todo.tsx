import React, {useEffect, useState} from "react";
import {TodoView} from "./todo-view";
import {Todos} from "./types";
import {useForm} from "../../util/use-form";
import {addTodo} from "./functions";

export function Todo(): JSX.Element {
    let [todos, setTodos] = useState<Todos>([]);

    const {formState: newTodoState, handleInputChange: handleTodoChange, handleSubmit} = useForm({newTodo: ''}, {
        onSubmit: () => addTodo(newTodoState.newTodo, todos, setTodos)
    })
    const {formState: filterState, handleInputChange: handleFilterChange} = useForm({filter: ''});

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json() as Todos;
            setTodos(data);
        }

        getData().catch(error => {
            console.error(error);
        })
    }, []);

    return <TodoView
        todos={todos}
        handleAddTodo={handleSubmit}
        handleTodoChange={handleTodoChange}
        handleFilterChange={handleFilterChange}
    />
}
