import { Component } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  items: Todo[] = [];
  inputValue: string = '';

  add() {
    if (this.inputValue) {
      this.items.push({ name: this.inputValue, isCompleted: false });
      this.inputValue = '';
    }
  }

  done(id: number) {
    this.items[id].isCompleted = !this.items[id].isCompleted;
  }

  del(id: number) {
    this.items = this.items.filter((v, i) => i !== id);
  }
}
