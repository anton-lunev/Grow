import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/state/auth.service';
import { Goal } from './goal.model';
import { GoalsStore } from './goals.store';

@Injectable({providedIn: 'root'})
export class GoalsService {
  myGoalsCollection: AngularFirestoreCollection<Goal>;

  constructor(private afs: AngularFirestore, private goalsStore: GoalsStore, private authService: AuthService) {

  }

  private getMyGoalsCollection(): Observable<Goal[]> {
    return this.authService.getCurrentUser()
      .pipe(switchMap(user => {
        this.myGoalsCollection = this.afs.collection('goals', ref =>
          ref.where('user', '==', user.uid));
        return this.myGoalsCollection.valueChanges();
      }));
  }


  getGoals() {
    this.getMyGoalsCollection().subscribe((goals: Goal[]) => {
      this.goalsStore.set(goals);
    });
  }
}
