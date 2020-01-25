import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySummaryComponent } from './body-summary.component';

describe('BodySummaryComponent', () => {
  let component: BodySummaryComponent;
  let fixture: ComponentFixture<BodySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
