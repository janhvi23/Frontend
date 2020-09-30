import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForm4Component } from './registration-form4.component';

describe('RegistrationForm4Component', () => {
  let component: RegistrationForm4Component;
  let fixture: ComponentFixture<RegistrationForm4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationForm4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
