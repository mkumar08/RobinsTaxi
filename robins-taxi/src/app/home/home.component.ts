import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    standalone: true
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Robin's Taxi – Reliable Taxi Service in Orange County, NY");
    this.meta.updateTag({ name: "description", content: "Robin's Taxi offers professional taxi service in Middletown and Orange County, NY. Airport trips, sightseeing tours, long-distance trips, local rides, and non-emergency medical transportation." });
    this.meta.updateTag({ name: "keywords", content: "taxi service, Orange County NY, Middletown NY, airport taxi, sightseeing tours, long distance trips, local transportation, non-emergency medical transportation" });

    // JSON-LD Structured Data
    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Robin's Taxi",
      "description": "Professional taxi and transportation service in Middletown and Orange County, NY.",
      "url": "https://www.nyrobinstaxi.com",
      "telephone": "+1-845-343-5555",
      "email": "contact@nyrobinstaxi.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "86 Cottage Street",
        "addressLocality": "Middletown",
        "addressRegion": "NY",
        "postalCode": "10940",
        "addressCountry": "US"
      },
      "areaServed": [
        "Middletown, NY",
        "Orange County, NY",
        "New York City, NY",
        "Tri-State Area"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Transportation Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Trips" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sightseeing Tours" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Long-Distance Trips" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Transportation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Non-Emergency Medical Transportation" } }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/robinstaxi86/"
      ]
    });
    this.document.head.appendChild(script);
  }
}
