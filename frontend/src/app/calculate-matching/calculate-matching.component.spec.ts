import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateMatchingComponent } from './calculate-matching.component';

describe('CalculateMatchingComponent', () => {
  let component: CalculateMatchingComponent;
  let fixture: ComponentFixture<CalculateMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateMatchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
