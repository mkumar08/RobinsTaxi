import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medical-transportation',
  imports: [RouterLink],
  templateUrl: './medical-transportation.component.html',
  styleUrl: './medical-transportation.component.css',
})
export class MedicalTransportationComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle("Non-Emergency Medical Transportation | Robin's Taxi - Middletown, NY");
    this.metaService.updateTag({
      name: 'description',
      content:
        "Robin's Taxi offers compassionate non-emergency medical transportation (NEMT) services in Middletown, NY. Safe, comfortable rides to doctor appointments, dialysis, therapy, and more.",
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        "non-emergency medical transportation, NEMT, medical taxi, doctor appointment ride, Middletown NY, Robin's Taxi",
    });
  }
}
