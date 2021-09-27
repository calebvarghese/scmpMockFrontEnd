import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { FsoDashBoardComponent } from './fso-dash-board/fso-dash-board.component';
import { ProspectFormsComponent } from './prospect-forms/prospect-forms.component';

const routes: Routes = [
  {path: 'admin', component: DashBoardComponent},
  {path: 'fsoDash', component: FsoDashBoardComponent}, 
  {path: 'forms', component: ProspectFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
