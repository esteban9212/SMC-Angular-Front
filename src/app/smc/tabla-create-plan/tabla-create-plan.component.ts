import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { PlanAssessmentService } from '../../services/plan-assessment.service';
import { Observable } from 'rxjs/Rx';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from "@angular/router";



@Component({
  selector: 'app-tabla-create-plan',
  templateUrl: './tabla-create-plan.component.html',
  styleUrls: ['./tabla-create-plan.component.css']
})
export class TablaCreatePlanComponent implements OnInit {

  public dataObservable:  Observable<any[]>;
  public data:  any[];

  public filterQuery = "";
  public rowsOnPage = 6;
  public sortBy = "Ciclo";
  public sortOrder = "desc";

    settings = {
    mode: 'inline',
    add: {
      addButtonContent: '<i class="nb-plus" aria-hidden="true"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="fas fa-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash" aria-hidden="true"></i>',
      confirmDelete: true,
    },
    actions: {
      edit: false, //as an example
      custom: [{ name: 'goTo', title: '<i class="fas fa-edit"></i>' }],
       width:'5%', 
    },
    columns: {
      Idplan: {
        title: '#',
        type: 'number',
          width:'5%', 
      },
      Name: {
        title: 'Name Plan',
        type: 'string',
         width:'15%', 
      },
      Ciclo: {
        title: 'Cycle',
        type: 'string',
           width:'5%', 
      },
      SubCiclo: {
        title: 'Subcycle',
        type: 'string',
         width:'5%',      
      },
      Program: {
        title: 'Program',
        type: 'string',
         width:'15%', 
      },
      Leader: {
        title: 'Leader',
        type: 'number',
      },
      State: {
        title: 'State',
        type: 'number',
         width:'10%', 
      },
      DateEvaluation: {
        title: 'Evaluation Date',
        type: 'string',
          width:'10%', 
      },
      Author: {
        title: 'Author',
        type: 'string',
         width:'10%', 
      },
    },
  };

    source: LocalDataSource = new LocalDataSource();



  constructor(private _http: Http,private planAssessmentService:PlanAssessmentService, private router: Router) { }

  ngOnInit() {


 this.dataObservable = this.planAssessmentService.getPlans();
  	this.dataObservable
      .subscribe((data)=> {
          this.data = data;
          this.source.load(data);
          console.log(data);
      });
  }

  onEdit(event): void {
    let idplan:number;
    idplan=event.data.Idplan;

   // window.open('/smc/search/'+idplan); 
     this.router.navigate(['/smc/search/'+idplan]);
  }

}

