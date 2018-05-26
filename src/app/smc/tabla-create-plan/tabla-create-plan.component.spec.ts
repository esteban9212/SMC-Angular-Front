import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCreatePlanComponent } from './tabla-create-plan.component';

describe('TablaCreatePlanComponent', () => {
  let component: TablaCreatePlanComponent;
  let fixture: ComponentFixture<TablaCreatePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCreatePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCreatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
