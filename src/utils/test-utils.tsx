import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
import toDoItemsSlice from "../__data__/toDoItemsSlise";
import {RootState} from "../__data__/store";

function render(
    ui: React.ReactElement,
    preloadedState: RootState | {} = {},
) {
    const store = configureStore({
        reducer: {
            toDo: toDoItemsSlice,
        }, preloadedState
    })

    function Wrapper({ children } : {children: React.ReactNode}) {
        return <Provider store={store}>{children}</Provider>
    }

    const options: object = { wrapper: Wrapper }

    return rtlRender(ui, options)
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
