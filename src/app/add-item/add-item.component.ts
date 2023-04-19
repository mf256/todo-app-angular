import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  title = 'Todo List';
  inputValue: string = '';

  constructor(private dataService: DataService) {}

  add() {
    this.dataService.add(this.inputValue);
    this.inputValue = '';
  }
}
