import { ActionReducerMap } from "@ngrx/store";
import { filtroValidos } from "./filtro/filtro.actions";
import { fitroReducer } from "./filtro/filtro.reducer";

import { TodoModel } from './todos/models/todo.model';
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
    todos: TodoModel[],
    filtro: filtroValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: fitroReducer    
}