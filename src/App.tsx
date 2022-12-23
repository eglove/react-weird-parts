import React, {CSSProperties} from 'react'
import './App.css'
import {Modal} from "./components/modal/modal";

export const centerAllTheThings: CSSProperties = {
    display: 'grid',
    placeItems: 'center',
}

function App() {
    return (
        <div style={centerAllTheThings}>
            <p>Hello, World!</p>
            <Modal />
        </div>
    )
}

export default App
