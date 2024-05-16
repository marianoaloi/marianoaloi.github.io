import { createAction } from "@reduxjs/toolkit";
import { TFunction } from "i18next";

export const choiceLanguage = createAction<string>(
    'choice/language',
)