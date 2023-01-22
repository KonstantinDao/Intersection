import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEingabeComponent } from './signup-eingabe.component';

describe('SignupEingabeComponent', () => {
  let component: SignupEingabeComponent;
  let fixture: ComponentFixture<SignupEingabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupEingabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupEingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
