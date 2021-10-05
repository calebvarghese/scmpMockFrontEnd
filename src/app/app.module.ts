import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatPseudoCheckbox } from '@angular/material/core';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MatListModule } from '@angular/material/list';
import { DisplayDriverComponent } from './display-driver/display-driver.component';
import { ProspectFormsComponent } from './prospect-forms/prospect-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ClearenceDashboardComponent } from './clearence-dashboard/clearence-dashboard.component';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ToolbarComponent,
    SideNavigationComponent,
    MyNavComponent,
    DisplayDriverComponent,
    ProspectFormsComponent,
    UsersComponent,
    UserDashboardComponent,
    TasklistComponent,
    ProjectDashboardComponent,
    ClearenceDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    ScrollingModule, 
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
