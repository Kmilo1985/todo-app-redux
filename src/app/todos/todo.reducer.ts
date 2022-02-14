import { createReducer, on } from '@ngrx/store';
import { TodoModel } from './models/todo.model';
import { borrar, crear, toggle, toggleAll, limpiar } from './todo.actions';

export const estadoInicial: TodoModel[] = [
  new TodoModel('Salvar al mundo'),
  new TodoModel('pruebas de texto 5'),
  new TodoModel('pruebas de texto 7'),
  new TodoModel('pruebas de texto 3'),
  new TodoModel('pruebas de texto 6'),

];
console.log(estadoInicial, 'estadoInicial');

const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, { texto }) => [...state, new TodoModel(texto)]),
  on(limpiar, state => state.filter(todo => !todo.completado)),


  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),

  on(toggleAll, (state, { completado }) => state.map(todo => {
    return {
      ...todo,
      completado: completado
    }
  })),

  on(toggle, (state, { id }) => {

    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }

    });
  }),

);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}