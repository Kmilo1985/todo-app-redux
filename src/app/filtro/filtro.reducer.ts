import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtroValidos } from './filtro.actions';

export const initialState: filtroValidos = 'todos';

const _filtroreducer = createReducer<filtroValidos, Action>(initialState,
    on(setFiltro, (state: filtroValidos, { filtro }) => filtro)
);

export function fitroReducer(state: any, action: any) {
    return _filtroreducer(state, action);
}

