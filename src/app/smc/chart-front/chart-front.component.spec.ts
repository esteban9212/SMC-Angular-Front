import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFrontComponent } from './chart-front.component';

describe('ChartFrontComponent', () => {
  let component: ChartFrontComponent;
  let fixture: ComponentFixture<ChartFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
