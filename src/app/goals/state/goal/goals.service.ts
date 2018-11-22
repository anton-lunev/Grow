import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { AuthService } from '../../../auth/state/auth.service';
import { createGoal, Goal } from './goal.model';
import { GoalsStore } from './goals.store';

@Injectable({ providedIn: 'root' })
export class GoalsService {
  private newGoal$ = new Subject<Goal>();

  constructor(private afs: AngularFirestore, private goalsStore: GoalsStore, private authService: AuthService) {}

  private getMyGoalsCollection(): AngularFirestoreCollection<Goal> {
    return this.afs.collection('goals', ref =>
      ref.where('user', '==', this.authService.getCurrentUser().uid).orderBy('modified', 'desc')
    );
  }

  private getGoalsCollection(): AngularFirestoreCollection<Goal> {
    return this.afs.collection('goals');
  }

  /**
   * Subscribe here probably will be moved to component since we don't need these updates always.
   * Also .valueChanges() will be removed, in order to reduce amount of traffic from firebase.
   */
  getGoals() {
    this.getMyGoalsCollection()
      .valueChanges()
      .subscribe((goals: Goal[]) => this.goalsStore.set(goals));
  }

  getNewGoal() {
    return this.newGoal$.asObservable();
  }

  addGoal(title: string) {
    const id = this.afs.createId();
    const user = this.authService.getCurrentUser().uid;
    const goal = createGoal({ id, user, title });
    this.getGoalsCollection()
      .doc(id)
      .set(goal)
      .then(() => this.newGoal$.next(goal));
  }

  updateGoal(goal: Goal) {
    this.getGoalsCollection()
      .doc(goal.id)
      .set(goal);
  }

  deleteGoal(goalId) {
    this.getGoalsCollection()
      .doc(goalId)
      .delete()
      .then(() => console.log(`goal ${goalId} has been deleted`));
  }
}
