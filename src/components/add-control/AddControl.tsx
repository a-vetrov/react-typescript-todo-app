import React, { useState } from 'react';
import { Button, Input } from 'antd';

import style from './AddControl.module.css'
import {useAppDispatch} from "../../__data__/hooks";
import { addItem } from '../../__data__/toDoItemsSlise';

const AddControl = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickHandler = () => {
        dispatch(addItem(text))
        setText('')
    }

    return (
        <div className={style.container}>
            <Input placeholder="Item description" onChange={onTextChange} value={text}/>
            <Button disabled={!text.length} onClick={onClickHandler}>Add</Button>
        </div>
    );
};

export default AddControl;
