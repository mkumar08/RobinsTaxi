import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SightseeingToursComponent } from './services/sightseeing-tours/sightseeing-tours.component';
import { LongDistanceTripsComponent } from './services/long-distance-trips/long-distance-trips.component';
import { LocalTransportationComponent } from './services/local-transportation/local-transportation.component';
import { MedicalTransportationComponent } from './services/medical-transportation/medical-transportation.component';
import { AirportTripsComponent } from './services/airport-trips/airport-trips.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services/sightseeing-tours',
    component: SightseeingToursComponent,
    title: "Sightseeing Tours | Robin's Taxi",
  },
  {
    path: 'services/long-distance-trips',
    component: LongDistanceTripsComponent,
    title: "Long-Distance Trips | Robin's Taxi",
  },
  {
    path: 'services/local-transportation',
    component: LocalTransportationComponent,
    title: "Local Transportation | Robin's Taxi",
  },
  {
    path: 'services/medical-transportation',
    component: MedicalTransportationComponent,
    title: "Non-Emergency Medical Transportation | Robin's Taxi",
  },
  {
    path: 'services/airport-trips',
    component: AirportTripsComponent,
    title: "Airport Trips | Robin's Taxi",
  },
];
