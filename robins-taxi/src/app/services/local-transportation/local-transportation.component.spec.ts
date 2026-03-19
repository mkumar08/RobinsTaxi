import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTransportationComponent } from './local-transportation.component';

describe('LocalTransportationComponent', () => {
  let component: LocalTransportationComponent;
  let fixture: ComponentFixture<LocalTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalTransportationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalTransportationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
