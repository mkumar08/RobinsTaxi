import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-long-distance-trips',
  imports: [RouterLink],
  templateUrl: './long-distance-trips.component.html',
  styleUrl: './long-distance-trips.component.css',
})
export class LongDistanceTripsComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle("Long-Distance Trips | Robin's Taxi - Middletown, NY");
    this.metaService.updateTag({
      name: 'description',
      content:
        "Need a ride across state lines or a long-distance trip? Robin's Taxi offers reliable long-distance transportation from Middletown, NY to destinations throughout the Tri-State area and beyond.",
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        "long distance taxi, long distance trips, Tri-State transportation, Middletown NY taxi, intercity rides, Robin's Taxi",
    });
  }
}
