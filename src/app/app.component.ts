import {Component} from '@angular/core';
import {Task} from "./Task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  tasks: Task[] = []
  inputValue: string

  addTask(input: string) {
    const taskAlreadyInList = this.tasks.some((task) => task.name === this.inputValue)
    if (!input || taskAlreadyInList) {
      return
    }
    this.tasks.push({
      name: this.inputValue,
      isCompleted: false,
    })
    this.inputValue = ''
  }

  deleteTask(index: number) {
    this.tasks = this.tasks.filter((_, i) => index !== i)
  }

  toggleCompletedTask(index: number) {
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted
  }
}
