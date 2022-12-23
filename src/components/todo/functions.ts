import {Dispatch, SetStateAction} from "react";
import {Todos} from "./types";

export const addTodo = ((newTodo: string, todos: Todos, setTodos: Dispatch<SetStateAction<Todos>>) => {
    if (newTodo === '' || newTodo === undefined) {
        return;
    }

    setTodos(todos => {
        return [{
            id: 999999,
            title: newTodo,
            completed: false,
            userId: 999999,
        }, ...todos];
    })
});

type RecordAny = Record<string | number | symbol, unknown>;

export const sortObjectArray = <ObjectType extends RecordAny>(
    array: ObjectType[],
    key: keyof ObjectType
): ObjectType[] => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        }

        if (a[key] > b[key]) {
            return 1;
        }

        return 0;
    });
};

const objectArray = [
    {id: 1, name: 'Henry'},
    {id: 2, name: 'Mary'}
]
const sorted = sortObjectArray(objectArray, 'id');
