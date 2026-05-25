import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-medical-transportation",
  templateUrl: "./medical-transportation.component.html",
  styleUrls: ["./medical-transportation.component.css"],
  standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class MedicalTransportationComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle("Non-Emergency Medical Transportation – Robin's Taxi | Orange County, NY");
    this.meta.updateTag({ name: "description", content: "Compassionate non-emergency medical transportation in Orange County, NY. Reliable rides to doctor appointments, dialysis, therapy, and hospitals. Call Robin's Taxi." });
    this.meta.updateTag({ name: "keywords", content: "non-emergency medical transportation, NEMT, medical taxi, doctor appointment rides, dialysis transportation, hospital taxi, Orange County NY medical transport" });

    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Robin's Taxi – Non-Emergency Medical Transportation",
      "description": "Compassionate non-emergency medical transportation (NEMT) in Orange County, NY.",
      "provider": {
        "@type": "TaxiService",
        "name": "Robin's Taxi",
        "telephone": "+1-845-343-5555",
        "url": "https://www.nyrobinstaxi.com"
      },
      "areaServed": "Orange County, NY",
      "availableService": [
        "Doctor Appointment Rides",
        "Dialysis Transportation",
        "Hospital Transfers",
        "Physical Therapy Rides",
        "Outpatient Procedure Transport"
      ]
    });
    this.document.head.appendChild(script);
  }
}
