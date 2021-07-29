import React from 'react';
import style from './App.module.css'
import {useAppSelector} from "./__data__/hooks";

function App() {
    const items = useAppSelector((state) => state.toDo.items)

    return (
        <div className={style.container}>
            <h1>ToDo app</h1>
            {
                items.map(item => (
                    <div key={item.id}>{item.title}</div>
                ))
            }
        </div>
    );
}

export default App;
