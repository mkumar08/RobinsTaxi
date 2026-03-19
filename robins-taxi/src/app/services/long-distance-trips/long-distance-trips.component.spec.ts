import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongDistanceTripsComponent } from './long-distance-trips.component';

describe('LongDistanceTripsComponent', () => {
  let component: LongDistanceTripsComponent;
  let fixture: ComponentFixture<LongDistanceTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LongDistanceTripsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongDistanceTripsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
