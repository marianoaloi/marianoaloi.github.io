import { createReducer } from "@reduxjs/toolkit"
import { choiceLanguage } from "./thunks"

export interface languageState {
    lang: string
}

const initialState: languageState = {
    lang: 'eng'
}

export const languageReduce = createReducer(initialState, (builder) => {
    builder.addCase(choiceLanguage, (state, action) => ({
        ...state,
        lang: action.payload
    }))
})