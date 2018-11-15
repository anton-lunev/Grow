import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Goal } from '../state/goal/goal.model';
import { GoalsQuery } from '../state/goal/goals.query';
import { GoalsService } from '../state/goal/goals.service';
import { Todo } from '../state/todos/todo.model';
import { TodosQuery } from '../state/todos/todos.query';
import { TodosService } from '../state/todos/todos.service';

@Component({
  selector: 'grow-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss']
})
export class GoalDetailsComponent implements OnInit {
  goal: Goal;
  originalGoal: Goal;
  todos: Todo[];

  constructor(
    private goalsService: GoalsService,
    private goalsQuery: GoalsQuery,
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.pipe(switchMap(params => this.goalsQuery.selectEntity(params.goalId))).subscribe(goal => {
      this.originalGoal = goal;
      this.goal = { ...goal };
    });
    this.route.params.pipe(switchMap(params => this.todosService.getTodos(params.goalId))).subscribe();
    this.route.params
      .pipe(switchMap(params => this.todosQuery.selectGoalTodos(params.goalId)))
      .subscribe(todos => (this.todos = todos.map(todo => ({ ...todo }))));
  }

  updateTitle() {
    if (this.goal.title !== this.originalGoal.title) {
      this.updateGoal();
    }
  }

  updateDescription() {
    if (this.goal.description !== this.originalGoal.description) {
      this.updateGoal();
    }
  }

  private updateGoal() {
    this.goalsService.updateGoal(this.goal);
  }

  addTodo(title) {
    this.todosService.addTodo(this.goal.id, title);
  }

  updateTodo(todo: Todo) {
    this.todosService.updateTodo(this.goal.id, todo);
  }

  deleteTodo(todo: Todo) {
    this.todosService.deleteTodo(this.goal.id, todo);
  }
}
