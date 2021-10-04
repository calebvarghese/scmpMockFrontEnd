import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProfileComponent } from './profile/profile.component';
import { ProspectFormsComponent } from './prospect-forms/prospect-forms.component';

const routes: Routes = [
  {path: 'admin', component: DashBoardComponent},
  {path: 'forms', component: ProspectFormsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
