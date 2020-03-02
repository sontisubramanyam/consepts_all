import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { DashboardoverviewComponent } from './dashboardoverview/dashboardoverview.component';
import { MainuserComponent } from './component_intereaction/mainuser/mainuser.component';
import { SubuserComponent } from './component_intereaction/subuser/subuser.component';
import { MaindataComponent } from './custom_pipe/maindata/maindata.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path:'dashBoard', component:DashboardComponent, 
    children:[
  {path:'dashboardoverview', component:DashboardoverviewComponent}],
  },
  // { path: '', redirectTo: '/dashBoard', pathMatch: 'full' }
  { path: 'mainUser', component: MainuserComponent},
  { path: 'subUser', component: SubuserComponent},
  { path: 'custompipe', component: MaindataComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
