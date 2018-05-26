import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SMCComponent } from './smc.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

import { ProgramsService } from '../services/programs.service';
import { OutcomeService } from '../services/outcome.service';
import { UserService } from '../services/user.service';
import { PlanAssessmentService } from '../services/plan-assessment.service';
import { AuthService } from '../services/auth.service';
import { MethodService } from '../services/method.service';
import { TablaCreatePlanComponent } from './tabla-create-plan/tabla-create-plan.component';
import { ChartFrontComponent } from './chart-front/chart-front.component';
import { ChartBackComponent } from './chart-back/chart-back.component';
import { HomeComponent } from './home/home.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { AboutComponent } from './about/about.component';
import { AssignLeaderComponent } from './assign-leader/assign-leader.component';
import { CdioRowComponent } from './cdio-row/cdio-row.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartsModule } from 'ng2-charts';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { PlanInfoComponent } from './plan-info/plan-info.component';
import { SearchComponent } from './search/search.component';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    Ng2SmartTableModule,
    ChartsModule,
    MyDatePickerModule,
  ],
  declarations: [
    SMCComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    HomeComponent,
    CreatePlanComponent,
    EditPlanComponent,
    AboutComponent,
    AssignLeaderComponent,
    TablaCreatePlanComponent,
    ChartFrontComponent,
    ChartBackComponent,
    PlanInfoComponent,
    SearchComponent,
    CdioRowComponent,
  ],
  exports: [SMCComponent]
})
export class SMCModule { }
