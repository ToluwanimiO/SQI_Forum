import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPhase2Component } from './sign-up-phase2.component';

describe('SignUpPhase2Component', () => {
  let component: SignUpPhase2Component;
  let fixture: ComponentFixture<SignUpPhase2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPhase2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPhase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
