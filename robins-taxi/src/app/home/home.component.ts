import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule]
})
export class HomeComponent implements OnInit {
  bookingForm!: FormGroup;
  submitted = false;
  today: string = new Date().toISOString().split("T")[0];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      fullName:    ["", [Validators.required, Validators.minLength(2)]],
      phone:       ["", [Validators.required, Validators.pattern(/^\+?[\d\s\-().]{7,20}$/)]],
      email:       ["", [Validators.email]],
      serviceType: ["", Validators.required],
      pickup:      ["", Validators.required],
      dropoff:     ["", Validators.required],
      rideDate:    ["", Validators.required],
      rideTime:    ["", Validators.required],
      passengers:  ["", Validators.required],
      notes:       [""]
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.bookingForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  submitBooking(): void {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }
    this.submitted = true;
  }
}
