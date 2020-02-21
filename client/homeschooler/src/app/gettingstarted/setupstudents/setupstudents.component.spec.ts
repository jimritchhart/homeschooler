import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupstudentsComponent } from './setupstudents.component';

describe('SetupstudentsComponent', () => {
  let component: SetupstudentsComponent;
  let fixture: ComponentFixture<SetupstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
