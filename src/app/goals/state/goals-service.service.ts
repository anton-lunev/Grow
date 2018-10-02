import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Goal } from '../models/goal.model';
import { GoalsStore } from './goals.store';

@Injectable({
  providedIn: 'root'
})
export class GoalsServiceService {
  goalsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private goalsStore: GoalsStore) {
    this.goalsCollection = afs.collection('goals');
    this.fetch();
  }

  fetch() {
    this.goalsCollection.valueChanges().subscribe((goals: Goal[]) => {
      this.goalsStore.set(goals);
    });
  }
}
