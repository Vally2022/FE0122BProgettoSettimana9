import { Todo } from "./models/todo";




let arrayTodo: Todo[] = []

export function getTodo() {

  return arrayTodo

}

export function addTodo(value: Todo) {

  return arrayTodo.push(value)

}



