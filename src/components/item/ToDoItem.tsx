import React from 'react';
import { Button } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import classnames from 'classnames'

import { IToDoItem, removeItem, actItem } from "../../__data__/toDoItemsSlise";
import { useAppDispatch } from "../../__data__/hooks";

import style from './ToDoItem.module.css'

const ToDoItem = ({id, title, done}: IToDoItem) => {
    const dispatch = useAppDispatch()

    const handleRemoveClick = () => {
        dispatch(removeItem(id))
    }

    const handleCheckClick = () => {
        dispatch(actItem(id))
    }

    return (
        <div className={style.container}>
            <div className={classnames(style.title, {[style.titleDone]: done})}>
                {title}
            </div>
            <Button shape='circle' icon={ <CloseOutlined />} className={style.button} onClick={handleRemoveClick}/>
            <Button shape='circle' icon={ <CheckOutlined />} className={style.button} onClick={handleCheckClick}/>

        </div>
    )
}

export default ToDoItem
