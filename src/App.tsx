import React from 'react';
import style from './App.module.css'
import {useAppSelector} from "./__data__/hooks";
import ToDoItem from "./components/item/ToDoItem";
import AddControl from "./components/add-control/AddControl";
import {getItemsSorted} from "./__data__/toDoItemsSlise";

function App() {
    const items = useAppSelector((state) => getItemsSorted(state.toDo))

    return (
        <div className={style.container}>
            <h1>ToDo app</h1>
            { items.map(item => <ToDoItem key={item.id} {...item}/>) }
            <AddControl />
        </div>
    );
}

export default App;
