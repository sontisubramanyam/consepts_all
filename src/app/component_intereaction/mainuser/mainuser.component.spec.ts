import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainuserComponent } from './mainuser.component';

describe('MainuserComponent', () => {
  let component: MainuserComponent;
  let fixture: ComponentFixture<MainuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
