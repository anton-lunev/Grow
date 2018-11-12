import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'grow-add-goal-button',
  templateUrl: './add-goal-button.component.html',
  styleUrls: ['./add-goal-button.component.scss']
})
export class AddGoalButtonComponent {
  @Output() addGoal = new EventEmitter<string>();

  isActive = false;
  goalTitle = '';
  hidingTimeout: any;

  constructor() {}

  showInput() {
    clearTimeout(this.hidingTimeout);
    this.isActive = true;
  }

  hideInput() {
    this.isActive = false;
  }

  hideInputWithDelay() {
    this.hidingTimeout = setTimeout(() => this.hideInput(), 300);
  }

  addNewGoal() {
    clearTimeout(this.hidingTimeout);
    this.addGoal.emit(this.goalTitle);
    this.hideInput();
    this.goalTitle = '';
  }
}
