import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
import { LandingComponent } from './components/landing/landing.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LogoComponent } from './components/parts/logo/logo.component';
import { InitiateComponent } from './components/pages/initiate/initiate.component';
import { ExploreComponent } from './components/pages/explore/explore.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { LinksComponent } from './components/parts/links/links.component';
import { ProjectListingComponent } from './components/parts/project-listing/project-listing.component';
import { ProjectDetailsComponent } from './components/parts/project-details/project-details.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotificationComponent } from './components/parts/notification/notification.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    LandingComponent,
    LogoComponent,
    InitiateComponent,
    ExploreComponent,
    LibraryComponent,
    LinksComponent,
    ProjectListingComponent,
    ProjectDetailsComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,

    MatProgressBarModule,
    HttpClientModule,
    AngularEditorModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
