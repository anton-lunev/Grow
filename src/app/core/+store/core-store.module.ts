import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { GoalsEffects } from './goals/goals.effects';
import { goalsReducer } from './goals/goals.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({goals: goalsReducer}),
    EffectsModule.forRoot([GoalsEffects]),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: []
})
export class CoreStoreModule {
}
