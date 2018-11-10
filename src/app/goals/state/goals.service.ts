import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../../auth/state/auth.service';
import { Goal } from './goal.model';
import { GoalsStore } from './goals.store';

@Injectable({ providedIn: 'root' })
export class GoalsService {
  constructor(private afs: AngularFirestore, private goalsStore: GoalsStore, private authService: AuthService) {}

  private getMyGoalsCollection(): AngularFirestoreCollection<Goal> {
    return this.afs.collection('goals', ref => ref.where('user', '==', this.authService.getCurrentUser().uid));
  }

  getGoals() {
    this.getMyGoalsCollection()
      .valueChanges()
      .subscribe((goals: Goal[]) => this.goalsStore.set(goals));
  }

  addGoal(goalTitle) {
    console.log(goalTitle);
    // TODO implement creating goal.
  }
}
