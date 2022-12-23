import React, {CSSProperties} from 'react'
import './App.css'
import {ReactRobot} from "./components/react-robot/react-robot";
import {Todo} from "./components/todo/todo";

export const centerAllTheThings: CSSProperties = {
    display: 'grid',
    placeItems: 'center',
}

function App(): JSX.Element {
    const helloWorld = 'Hello, World!';

    return (
        <div style={centerAllTheThings}>
            <p>{helloWorld}</p>
            <Todo />
        </div>
    )
}

export default App
