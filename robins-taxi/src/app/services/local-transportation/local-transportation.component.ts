import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-local-transportation',
  imports: [RouterLink],
  templateUrl: './local-transportation.component.html',
  styleUrl: './local-transportation.component.css',
})
export class LocalTransportationComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle("Local Transportation | Robin's Taxi - Middletown, NY");
    this.metaService.updateTag({
      name: 'description',
      content:
        "Robin's Taxi provides reliable and affordable local transportation in Middletown, NY and throughout Orange County. Available 24/7 for all your local rides.",
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        "local taxi, Middletown NY transportation, Orange County taxi, local rides, Robin's Taxi, affordable taxi",
    });
  }
}
