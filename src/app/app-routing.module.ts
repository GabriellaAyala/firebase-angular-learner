import { NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CollectionTestingComponent } from './collection-testing/collection-testing.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'collection-testing', component: CollectionTestingComponent, canActivate: [AuthGuardService]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
