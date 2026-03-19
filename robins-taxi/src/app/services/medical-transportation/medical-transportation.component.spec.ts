import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalTransportationComponent } from './medical-transportation.component';

describe('MedicalTransportationComponent', () => {
  let component: MedicalTransportationComponent;
  let fixture: ComponentFixture<MedicalTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalTransportationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalTransportationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
