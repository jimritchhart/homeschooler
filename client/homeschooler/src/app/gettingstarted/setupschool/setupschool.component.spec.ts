import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupschoolComponent } from './setupschool.component';

describe('SetupschoolComponent', () => {
  let component: SetupschoolComponent;
  let fixture: ComponentFixture<SetupschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
