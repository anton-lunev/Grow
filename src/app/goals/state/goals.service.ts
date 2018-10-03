import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Goal } from './goal.model';
import { GoalsStore } from './goals.store';

@Injectable({providedIn: 'root'})
export class GoalsService {
  goalsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private goalsStore: GoalsStore) {
    this.goalsCollection = afs.collection('goals');
  }

  getGoals() {
    this.goalsCollection.valueChanges().subscribe((goals: Goal[]) => {
      this.goalsStore.set(goals);
    });
  }
}
