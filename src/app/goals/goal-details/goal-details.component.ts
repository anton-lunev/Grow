import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Goal } from '../state/goal/goal.model';
import { GoalsQuery } from '../state/goal/goals.query';
import { GoalsService } from '../state/goal/goals.service';
import { Todo } from '../state/todos/todo.model';
import { TodosQuery } from '../state/todos/todos.query';
import { TodosService } from '../state/todos/todos.service';
import { ScriptService } from '../../shared/services/script.service';

@Component({
  selector: 'grow-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.scss']
})
export class GoalDetailsComponent implements OnInit {
  goal: Goal;
  originalGoal: Goal;
  todos: Todo[];
  GoogleAuth: Object;

  constructor(
    private goalsService: GoalsService,
    private goalsQuery: GoalsQuery,
    private todosService: TodosService,
    private todosQuery: TodosQuery,
    private route: ActivatedRoute,
    private scriptService: ScriptService
  ) {}

  ngOnInit() {
    this.route.parent.params.pipe(switchMap(params => this.goalsQuery.selectEntity(params.goalId))).subscribe(goal => {
      this.originalGoal = goal;
      this.goal = { ...goal };
    });
    this.route.parent.params.pipe(switchMap(params => this.todosService.getTodos(params.goalId))).subscribe();
    this.route.parent.params
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

  initClient(gapi) {
    gapi.client
      .init({
        apiKey: 'AIzaSyCrYu7nRuk51weEpTsZSGgTFeUTSlQzHLA',
        clientId: '366422292091-0cnf5fibre3tp4933cii863b223uc4l1.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
      })
      .then(
        function() {
          console.log('im here');
          // Listen for sign-in state changes.
          // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
          //
          // // Handle the initial sign-in state.
          // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          // authorizeButton.onclick = handleAuthClick;
          // signoutButton.onclick = handleSignoutClick;
        },
        function(error) {
          console.error(error);
        }
      );
  }

  handleClientLoad(gapi) {
    gapi.load('client:auth2', this.initClient);
  }

  uploadImage(e: Event) {
    this.scriptService.loadScript('https://apis.google.com/js/api.js').subscribe(() => {
      const { gapi } = window;

      this.handleClientLoad(gapi);
    });
  }
}
