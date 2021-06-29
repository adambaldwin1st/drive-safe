import { Component } from '@angular/core';
    @Component({
      selector: 'app-home',
      templateUrl: 'home.page.html',
      styleUrls: ['home.page.scss'],
    })
    export class HomePage {
      public todos: Array<{ title: string; note: string; completed: boolean}> = [];

      isCompleted(todo){
        if(todo.completed) return 'checkmark-circle';
        else return 'stopwatch';
      }
      constructor() {
        for (let i = 0; i < 9; i++) {
          this.todos.push({
            title: 'Todo ' + i,
            note: 'This is todo #' + i,
            completed: !!i
          });
        }
      }
    }
