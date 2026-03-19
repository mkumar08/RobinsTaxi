import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-airport-trips',
  imports: [RouterLink],
  templateUrl: './airport-trips.component.html',
  styleUrl: './airport-trips.component.css',
})
export class AirportTripsComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle("Airport Trips | Robin's Taxi - Middletown, NY");
    this.metaService.updateTag({
      name: 'description',
      content:
        "Robin's Taxi provides on-time airport transportation to JFK, LaGuardia, Newark, and other major airports from Middletown, NY. Book your airport ride today!",
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        "airport taxi, JFK taxi, LaGuardia taxi, Newark airport ride, Middletown NY, Robin's Taxi, airport transportation",
    });
  }
}
