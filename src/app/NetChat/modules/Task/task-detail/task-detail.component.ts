import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  standalone: true,
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task = { title: 'Sample Task', description: 'Task Description', status: 'Pending' };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Load task details based on the route parameter (example only, replace with actual logic)
    const taskId = this.route.snapshot.paramMap.get('id');
    // Fetch the task details using the ID
  }

  goBack() {
    this.router.navigate(['/tasks']);
  }
}
