import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'grow-add-goal-button',
  templateUrl: './add-goal-button.component.html',
  styleUrls: ['./add-goal-button.component.scss']
})
export class AddGoalButtonComponent {
  @Output() addGoal = new EventEmitter<string>();

  isActive = false;
  goalTitle = '';

  constructor() {}

  showInput() {
    this.isActive = true;
  }

  hideInput() {
    this.isActive = false;
  }

  addNewGoal() {
    this.hideInput();
    this.addGoal.emit(this.goalTitle);
    this.goalTitle = '';
  }
}
