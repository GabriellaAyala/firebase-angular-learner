import { NgModule } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/collection-testing', pathMatch: 'full'},
  {path: 'collection-testing', component: AppComponent},
  {path: 'user-profile', component: UserProfileComponent}
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
