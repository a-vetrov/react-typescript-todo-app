import React from 'react';
import style from './App.module.css'
import {useAppSelector} from "./__data__/hooks";
import ToDoItem from "./components/item/ToDoItem";
import AddControl from "./components/add-control/AddControl";

function App() {
    const items = useAppSelector((state) => state.toDo.items)

    return (
        <div className={style.container}>
            <h1>ToDo app</h1>
            { items.map(item => <ToDoItem key={item.id} {...item}/>) }
            <AddControl />
        </div>
    );
}

export default App;
