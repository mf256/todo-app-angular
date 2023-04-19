import { Injectable } from '@angular/core';
import { Todo } from '../models/models';
import { MOCK_ITEMS } from './mockData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items: Todo[] = [];

  constructor() {
    this.items = [...MOCK_ITEMS];
  }

  add(inputValue: string) {
    if (inputValue) {
      this.items.push({
        id: this.items.length,
        name: inputValue,
        isCompleted: false,
      });
    }
  }

  togle(index: number) {
    this.items[index].isCompleted = !this.items[index].isCompleted;
  }

  del(index: number) {
    this.items = [...this.items.filter((v, i) => i !== index)];
  }

  get(): Todo[] {
    return this.items;
  }
}
