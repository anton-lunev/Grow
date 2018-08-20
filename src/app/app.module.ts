import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
// import {TasksComponent} from './tasks/tasks.component';
// import { TaskComponent } from './tasks/task/task.component';
import { MarkupComponent } from './markup/markup.component';

@NgModule({
  declarations: [
    AppComponent,
    // TasksComponent,
    // TaskComponent,
    MarkupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    EffectsModule.forRoot([/*PostEffects*/]),

    StoreModule.forRoot({
      // post: postReducer
    }),

    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
