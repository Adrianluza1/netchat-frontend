import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './NetChat/modules/Chat/components/overview/overview.component';
import { TaskListComponent } from './NetChat/modules/Task/task-list/task-list.component';
import { ProfileComponent } from './NetChat/modules/Task/task-detail/task-detail.component';
import { SettingsComponent } from './NetChat/modules/Task/task-general/task-general.component';
import { WelcomeComponent } from './NetChat/modules/Welcome/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
