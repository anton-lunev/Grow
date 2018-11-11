import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { AuthService } from '../../auth/state/auth.service';
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

  getGoals() {
    this.getMyGoalsCollection()
      .valueChanges()
      .subscribe((goals: Goal[]) => this.goalsStore.set(goals));
  }

  getNewGoal() {
    return this.newGoal$.asObservable();
  }

  addGoal(title) {
    const id = this.afs.createId();
    const user = this.authService.getCurrentUser().uid;
    const goal = createGoal({ id, user, title });
    this.getMyGoalsCollection()
      .doc(id)
      .set(goal)
      .then(() => this.newGoal$.next(goal));
  }
}
