import { createAction } from "@reduxjs/toolkit";
import { TFunction } from "i18next";

export const choiceLanguage = createAction<TFunction<[string, string], undefined>>(
    'choice/language',
)