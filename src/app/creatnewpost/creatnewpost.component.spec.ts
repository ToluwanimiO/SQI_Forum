import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatnewpostComponent } from './creatnewpost.component';

describe('CreatnewpostComponent', () => {
  let component: CreatnewpostComponent;
  let fixture: ComponentFixture<CreatnewpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatnewpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatnewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
