import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { limpiar } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filtroActual: actions.filtroValidos = 'todos';
  public filtros: actions.filtroValidos[] = ['todos', 'completados', 'pendientes'];

  public pendientes: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);

    this.store.subscribe(state =>{
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length
    })

  }


  public cambiarFiltro(filtro: actions.filtroValidos) {
    console.log(filtro);

    this.store.dispatch(actions.setFiltro({ filtro }));
  }

  public limpiarCompletados(){
    this.store.dispatch(limpiar());
  }

}
