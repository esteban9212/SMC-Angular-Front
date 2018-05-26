import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
  declarations: [
    AdminComponent,
    SigninComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
