import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEingabeComponent } from './login-eingabe.component';

describe('LoginEingabeComponent', () => {
  let component: LoginEingabeComponent;
  let fixture: ComponentFixture<LoginEingabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEingabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});