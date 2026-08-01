import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  tasks: string[] = ['Learn Angular', 'Build a project'];

  addTask(newTask: string) {
    if (newTask.trim() !== '') {
      this.tasks.push(newTask);
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}