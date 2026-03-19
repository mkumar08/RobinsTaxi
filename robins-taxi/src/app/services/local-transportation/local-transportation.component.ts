import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-local-transportation",
  templateUrl: "./local-transportation.component.html",
  styleUrls: ["./local-transportation.component.css"],
  standalone: true,
  imports: [RouterLink]
})
export class LocalTransportationComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Local Transportation – Robin's Taxi | Middletown & Orange County, NY");
    this.meta.updateTag({ name: "description", content: "Dependable local taxi service in Middletown, Newburgh, and Orange County, NY. On-demand rides for everyday errands, appointments, shopping, and more. Call Robin's Taxi." });
    this.meta.updateTag({ name: "keywords", content: "local taxi, Middletown NY taxi, Orange County taxi, Newburgh taxi, on-demand rides, local transportation, everyday rides" });

    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Local Transportation",
      "provider": {
        "@type": "TaxiService",
        "name": "Robin's Taxi",
        "telephone": "+1-845-343-5555",
        "url": "https://www.nyrobinstaxi.com"
      },
      "areaServed": "Orange County, NY",
      "description": "Dependable on-demand local taxi service in Middletown, Newburgh, and Orange County, NY."
    });
    this.document.head.appendChild(script);
  }
}
