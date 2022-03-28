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
  tasks = document.querySelector('#tasks')
  
  constructor(){}

  arrayTodo: any[] = []

  addTodo(title: string) {
    this.arrayTodo.push(title)
    this.completed = false
   }
  

  getTodo(title: string){

    this.completed = true
    console.log(this.completed)
  }



  ngOnInit(): void {
  }

}
