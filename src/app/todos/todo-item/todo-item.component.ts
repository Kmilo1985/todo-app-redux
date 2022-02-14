import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoModel } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModel = new TodoModel('');
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  public chkCompletado: FormControl;
  public txtInput: FormControl;

  public editando: boolean = false;

  // txtIpot:FormControl;

  constructor(private store: Store<AppState>) {
    this.chkCompletado = new FormControl(false);
    this.txtInput = new FormControl('', [Validators.required]);
    this.txtInputFisico = new ElementRef('');

  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, [Validators.required])

    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) );
    });
  }

  public borrar(){
    this.store.dispatch(actions.borrar({id:this.todo.id}));
  }

  public editar() {
    this.editando = true;
    this.txtInput.setValue( this.todo.texto );
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 2);
  }

  public terminarEdicion() {
    this.editando = false;
  }

}
