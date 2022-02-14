import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  public txtIput: FormControl;
  constructor(private store: Store<AppState>) {
    this.txtIput = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  public agregarTodo() {
    // console.log(this.txtIput.value, 'agregar');
    if (this.txtIput.invalid) {
      return;
    }
    this.store.dispatch(actions.crear({ texto: this.txtIput.value }))
    this.txtIput.reset();
  }

}
