import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "./store";

export interface IToDoItem {
    id: number
    title: string
    done: boolean
}

type ToDoItems = {
    items: IToDoItem[]
    maxId: number
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
    maxId: 4
}

export const toDoItemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state: ToDoItems, action: PayloadAction<string>) => {
            const item: IToDoItem = {id: state.maxId, title: action.payload, done: false}
            state.items.push(item)
            state.maxId ++
        },
    },
})

export const { addItem } = toDoItemsSlice.actions;

export const getItemById = (state: RootState, id: number): IToDoItem | undefined => state.toDo.items.find(item => item.id === id)

export default toDoItemsSlice.reducer;
