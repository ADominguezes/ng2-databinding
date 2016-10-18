import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  /* Declared variables for TypeScript */
  titulo:string;
  value:string;
  visible:boolean;
  constructor() {
    /* Variables with value */
    this.title = 'Data Binding!';
    this.value ='show / hide';
    this.visible =false;
  }
}

export class App {
  
}