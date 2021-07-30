import React from 'react';
import {IToDoItem} from "../../__data__/toDoItemsSlise";

const ToDoItem = ({id, title, done}: IToDoItem) => {

    return (
        <div>
            {title}
        </div>
    )
}

export default ToDoItem
