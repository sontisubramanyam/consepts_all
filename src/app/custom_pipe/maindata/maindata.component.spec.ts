import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindataComponent } from './maindata.component';

describe('MaindataComponent', () => {
  let component: MaindataComponent;
  let fixture: ComponentFixture<MaindataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
