import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { SMCComponent } from './../smc.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CreatePlanComponent } from '../create-plan/create-plan.component';
import { AboutComponent } from '../about/about.component';
import { AssignLeaderComponent } from '../assign-leader/assign-leader.component';
import { EditPlanComponent } from '../edit-plan/edit-plan.component';
import { SearchComponent } from '../search/search.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'smc',
        component: SMCComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          { path:'home',component:HomeComponent},
          { path:'create',component:CreatePlanComponent},
          { path:'about',component:AboutComponent},
          { path:'assign',component:AssignLeaderComponent},
          { path:'search/:idPlan',component:SearchComponent},
          { path:'edit/:idPlan/:idPi',component:EditPlanComponent},
          { path:'**',pathMatch:'full',redirectTo:'home'}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
