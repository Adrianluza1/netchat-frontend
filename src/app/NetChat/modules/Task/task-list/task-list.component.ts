import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  standalone: true,
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Task One', status: 'Completed' },
    { id: 2, title: 'Task Two', status: 'In Progress' },
    { id: 3, title: 'Task Three', status: 'Pending' }
  ];

  constructor(private router: Router) {}

  viewTask(taskId: number) {
    this.router.navigate(['/tasks', taskId]);
  }
}
