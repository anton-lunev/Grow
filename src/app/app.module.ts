import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/state/auth.service';
import { LayoutModule } from './layout/layout.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    !environment.production ? [AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot()] : [],
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    ProfileModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: (as: AuthService) => () => as.init(), deps: [AuthService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
