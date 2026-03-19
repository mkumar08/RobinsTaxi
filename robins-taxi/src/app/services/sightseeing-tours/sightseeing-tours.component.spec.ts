import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightseeingToursComponent } from './sightseeing-tours.component';

describe('SightseeingToursComponent', () => {
  let component: SightseeingToursComponent;
  let fixture: ComponentFixture<SightseeingToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SightseeingToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SightseeingToursComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
