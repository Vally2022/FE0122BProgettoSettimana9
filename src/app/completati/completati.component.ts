import { Component, OnInit, NgModule } from '@angular/core';
import * as Todosrc from '../todos.service'
import { TodosComponent } from '../todos/todos.component';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})


export class CompletatiComponent implements Todo {
  id!: number;
  title!: string;
  completed!: boolean;
 
  
  constructor(){}
  
  arrayTodo!: Todo[]


  putTodo(): any{
    if (this.completed == true){
      return this.arrayTodo
    }
    else {
      this.arrayTodo
    }
    
  }

  
  
  

  

  ngOnInit(): void {
  }

}
