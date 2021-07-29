import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./store";

interface IToDoItem {
    id: number
    title: string
    done: boolean
}

type ToDoItems = {
    items: IToDoItem[]
}

const initialState: ToDoItems = {
    items: [
        {
            id: 1,
            title: 'Item 1',
            done: false,
        },
        {
            id: 2,
            title: 'Item 2',
            done: false,
        },
        {
            id: 3,
            title: 'Item 3',
            done: false,
        },
    ],
}

export const toDoItemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IToDoItem>) => {
            state.items.push(action.payload)
        },
    },
})

export const { add } = toDoItemsSlice.actions;

export const getItemById = (state: RootState, id: number) => state

export default toDoItemsSlice.reducer;
