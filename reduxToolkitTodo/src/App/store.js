import {cofigureStore} from '@reduxjs/toolkit';
import todoReducer from '..features/todo/todoSlice';
export const store = cofigureStore({
    reducer : todoReducer
}) 

