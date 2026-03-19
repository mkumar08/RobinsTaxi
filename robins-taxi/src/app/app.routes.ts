import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services/airport-trips',
    loadComponent: () =>
      import('./services/airport-trips/airport-trips.component').then(
        (m) => m.AirportTripsComponent
      ),
  },
  {
    path: 'services/sightseeing-tours',
    loadComponent: () =>
      import('./services/sightseeing-tours/sightseeing-tours.component').then(
        (m) => m.SightseeingToursComponent
      ),
  },
  {
    path: 'services/long-distance-trips',
    loadComponent: () =>
      import('./services/long-distance-trips/long-distance-trips.component').then(
        (m) => m.LongDistanceTripsComponent
      ),
  },
  {
    path: 'services/local-transportation',
    loadComponent: () =>
      import('./services/local-transportation/local-transportation.component').then(
        (m) => m.LocalTransportationComponent
      ),
  },
  {
    path: 'services/medical-transportation',
    loadComponent: () =>
      import('./services/medical-transportation/medical-transportation.component').then(
        (m) => m.MedicalTransportationComponent
      ),
  },
];
