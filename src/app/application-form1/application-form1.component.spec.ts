import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForm1Component } from './application-form1.component';

describe('ApplicationForm1Component', () => {
  let component: ApplicationForm1Component;
  let fixture: ComponentFixture<ApplicationForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
