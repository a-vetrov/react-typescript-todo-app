import React from 'react';
import { Button } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
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
        <div className={classnames(style.container, {[style.containerDone]: done})}>
            <div className={classnames(style.title, {[style.titleDone]: done})}>
                {title}
            </div>
            <Button shape='circle' icon={ <CloseCircleTwoTone twoToneColor='red'/>} type={'text'} className={style.button} onClick={handleRemoveClick}/>
            <Button shape='circle' icon={ <CheckCircleTwoTone />} type={'text'} className={style.button} onClick={handleCheckClick}/>

        </div>
    )
}

export default ToDoItem
