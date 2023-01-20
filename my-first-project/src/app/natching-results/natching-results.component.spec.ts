import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatchingResultsComponent } from './natching-results.component';

describe('NatchingResultsComponent', () => {
  let component: NatchingResultsComponent;
  let fixture: ComponentFixture<NatchingResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatchingResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatchingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
