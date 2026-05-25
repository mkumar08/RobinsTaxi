import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-sightseeing-tours",
  templateUrl: "./sightseeing-tours.component.html",
  styleUrls: ["./sightseeing-tours.component.css"],
  standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class SightseeingToursComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Sightseeing Tours – Robin's Taxi | Explore New York & Hudson Valley");
    this.meta.updateTag({ name: "description", content: "Explore New York City, Hudson Valley, and the Catskills with Robin's Taxi sightseeing tours. Comfortable, guided taxi tours from Orange County, NY." });
    this.meta.updateTag({ name: "keywords", content: "sightseeing tours, New York taxi tours, Hudson Valley tours, Catskills tours, Orange County NY tours, NYC day trips" });

    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": "Sightseeing Tours by Robin's Taxi",
      "provider": {
        "@type": "TaxiService",
        "name": "Robin's Taxi",
        "telephone": "+1-845-343-5555",
        "url": "https://www.nyrobinstaxi.com"
      },
      "touristType": "Leisure Traveler",
      "description": "Comfortable sightseeing taxi tours to New York City, Hudson Valley, and the Catskills from Orange County, NY."
    });
    this.document.head.appendChild(script);
  }
}
