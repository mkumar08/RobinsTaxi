import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-long-distance-trips",
  templateUrl: "./long-distance-trips.component.html",
  styleUrls: ["./long-distance-trips.component.css"],
  standalone: true,
  imports: [RouterLink]
})
export class LongDistanceTripsComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Long-Distance Trips – Robin's Taxi | Intercity & Tri-State Travel");
    this.meta.updateTag({ name: "description", content: "Comfortable long-distance taxi service from Orange County, NY. Intercity and Tri-State trips to NYC, New Jersey, Connecticut, Pennsylvania, and beyond. Flat rates available." });
    this.meta.updateTag({ name: "keywords", content: "long distance taxi, intercity taxi, Tri-State taxi, NYC taxi Orange County, New Jersey taxi, Connecticut taxi, Pennsylvania rides" });

    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Long-Distance Transportation",
      "provider": {
        "@type": "TaxiService",
        "name": "Robin's Taxi",
        "telephone": "+1-845-343-5555",
        "url": "https://www.nyrobinstaxi.com"
      },
      "areaServed": "Tri-State Area",
      "description": "Comfortable intercity and Tri-State long-distance taxi service from Orange County, NY."
    });
    this.document.head.appendChild(script);
  }
}
