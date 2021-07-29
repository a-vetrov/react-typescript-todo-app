import { configureStore } from '@reduxjs/toolkit'
import toDoItemsSlice from "./toDoItemsSlise";

export const store = configureStore({
    reducer: {
        toDo: toDoItemsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
