import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../models/models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListComponent {
  items: Todo[] = [];

  constructor(private dataService: DataService) {
    this.reload();
  }

  done(id: number) {
    this.dataService.togle(id);
  }

  del(id: number) {
    this.dataService.del(id);
    this.reload();
  }

  reload() {
    this.items = this.dataService.get();
  }
}
