import { ExploreComponent } from './components/pages/explore/explore.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';

// Import all the components for which navigation service has to be activated

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: '__/auth/action', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'landing', component: LandingComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'explore', component: ExploreComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: LibraryComponent, canActivate: [AuthGuard] },
  {
    path: 'projects/:id',
    component: LibraryComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
