import { createReducer } from "@reduxjs/toolkit"
import { choiceLanguage } from "./thunks"
import { TFunction } from "i18next"
import { useTranslation } from "react-i18next";

export interface languageState {
    filter: TFunction<[string, string], undefined> | undefined
}

const initialState: languageState = {
    filter: undefined
}

export const languageReduce = createReducer(initialState, (builder) => {
    builder.addCase(choiceLanguage, (state, action) => ({
        ...state,
        filter: action.payload
    }))
})