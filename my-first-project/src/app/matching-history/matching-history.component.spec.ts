import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingHistoryComponent } from './matching-history.component';

describe('MatchingHistoryComponent', () => {
  let component: MatchingHistoryComponent;
  let fixture: ComponentFixture<MatchingHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
