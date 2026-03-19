import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportTripsComponent } from './airport-trips.component';

describe('AirportTripsComponent', () => {
  let component: AirportTripsComponent;
  let fixture: ComponentFixture<AirportTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportTripsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportTripsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
