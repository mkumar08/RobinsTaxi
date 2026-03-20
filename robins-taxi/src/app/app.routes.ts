import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AirportTripsComponent } from './services/airport-trips/airport-trips.component';
import { SightseeingToursComponent } from './services/sightseeing-tours/sightseeing-tours.component';
import { LongDistanceTripsComponent } from './services/long-distance-trips/long-distance-trips.component';
import { LocalTransportationComponent } from './services/local-transportation/local-transportation.component';
import { MedicalTransportationComponent } from './services/medical-transportation/medical-transportation.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services/airport-trips', component: AirportTripsComponent },
  { path: 'services/sightseeing-tours', component: SightseeingToursComponent },
  { path: 'services/long-distance-trips', component: LongDistanceTripsComponent },
  { path: 'services/local-transportation', component: LocalTransportationComponent },
  { path: 'services/medical-transportation', component: MedicalTransportationComponent },
];
