import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsimagesComponent } from './hsimages.component';

describe('HsimagesComponent', () => {
  let component: HsimagesComponent;
  let fixture: ComponentFixture<HsimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
