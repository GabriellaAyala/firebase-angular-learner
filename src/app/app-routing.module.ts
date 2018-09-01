import { NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router'
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CollectionTestingComponent } from './collection-testing/collection-testing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/collection-testing', pathMatch: 'full'},
  {path: 'collection-testing', component: CollectionTestingComponent},
  {path: 'user-profile', component: UserProfileComponent},
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
