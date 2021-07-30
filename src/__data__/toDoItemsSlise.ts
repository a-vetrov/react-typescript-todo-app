import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AppDispatch} from "./store";

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

export const getItemById = (state: ToDoItems, id: number): IToDoItem | undefined => state.items.find(item => item.id === id)

export const getItemsSorted = (state: ToDoItems): IToDoItem[] => [
    ...state.items.filter(item => !item.done),
    ...state.items.filter(item => item.done),
]

export const toDoItemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state: ToDoItems, action: PayloadAction<string>) => {
            const item: IToDoItem = {id: state.maxId, title: action.payload, done: false}
            state.items.push(item)
            state.maxId ++
        },

        removeItem: (state: ToDoItems, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },

        actItem: (state: ToDoItems, action: PayloadAction<number>) => {
            const item = getItemById(state, action.payload)
            if (item) {
                item.done = !item.done
            }
        },

    },
})

export const { addItem, removeItem, actItem } = toDoItemsSlice.actions;

export const addItemAsync = (title: string) => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(addItem(title));
    }, 1000);
};

export default toDoItemsSlice.reducer;
