import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './../signin/signin.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'auth',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'signin',
            pathMatch: 'full'
          },
          {
            path: 'signin',
            component: SigninComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
