import { Component, DoBootstrap, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompletatiComponent } from '../completati/completati.component';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements Todo {
  id!: number;
  title!: string;
  completed!: boolean;


  constructor() { }

  arrayTodo: any[] = []

  addTodo(title: string) {
    if (title == '') {
      setTimeout(() => {
        document.querySelector('#campovuoto')?.innerHTML, ('Non sono presenti record')
      }, 1000)
    }
    else {
      this.arrayTodo.push(title)
      this.completed = false
    }
  }


  getTodo(title: string) {
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati);
    db.push(title)
    localStorage.setItem('lista', JSON.stringify(db))
  }
  

}

