import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CompletatiComponent } from './completati/completati.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Route[] = [
  {
    path: '',
    component: TodosComponent
  },
  {
    path: 'componenti',
    component: CompletatiComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletatiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
