import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sightseeing-tours',
  imports: [RouterLink],
  templateUrl: './sightseeing-tours.component.html',
  styleUrl: './sightseeing-tours.component.css',
})
export class SightseeingToursComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle("Sightseeing Tours | Robin's Taxi - Middletown, NY");
    this.metaService.updateTag({
      name: 'description',
      content:
        "Explore the beauty of New York and the Tri-State area with Robin's Taxi sightseeing tours. Professional, comfortable, and affordable guided taxi tours from Middletown, NY.",
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        "sightseeing tours, taxi tours, New York tours, Middletown NY, Robin's Taxi, guided tours",
    });
  }
}
