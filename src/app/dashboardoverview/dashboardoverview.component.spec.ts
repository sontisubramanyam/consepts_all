import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardoverviewComponent } from './dashboardoverview.component';

describe('DashboardoverviewComponent', () => {
  let component: DashboardoverviewComponent;
  let fixture: ComponentFixture<DashboardoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
