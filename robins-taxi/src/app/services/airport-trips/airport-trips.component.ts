import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-airport-trips",
  templateUrl: "./airport-trips.component.html",
  styleUrls: ["./airport-trips.component.css"],
  standalone: true,
  imports: [RouterLink]
})
export class AirportTripsComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Airport Trips – Robin's Taxi | Orange County to JFK, LGA, EWR");
    this.meta.updateTag({ name: "description", content: "Reliable airport taxi service from Orange County and Middletown, NY to JFK, LaGuardia, Newark, and Stewart airports. On-time, professional drivers available 24/7." });
    this.meta.updateTag({ name: "keywords", content: "airport taxi, JFK taxi, LaGuardia taxi, Newark airport taxi, Stewart airport, Orange County airport transportation, Middletown NY airport rides" });

    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Airport Transportation",
      "provider": {
        "@type": "TaxiService",
        "name": "Robin's Taxi",
        "telephone": "+1-845-343-5555",
        "url": "https://www.nyrobinstaxi.com"
      },
      "areaServed": "Orange County, NY",
      "description": "Reliable airport transfers to JFK, LaGuardia, Newark, and Stewart airports from Orange County, NY."
    });
    this.document.head.appendChild(script);
  }
}
