import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onNavigatetoTaxiReservation() {
    const url =
      "https://portal.pergorides.io/reservation/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYm5hbWUiOiJwZXJnbzMzOTY0Y2FyIiwiaWF0IjoxNjgwMjkxMjQ3fQ.uUxP9zfAul33_WUULS_iiK_mWqzr4hPkAfmcM02a3rQ&type=passenger";
    window.open(url, "_blank");
  }

  onNavigatetoMedicalReservation() {
    const url =
      "https://portal.pergorides.io/reservation/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYm5hbWUiOiJwZXJnbzMzOTY0Y2FyIiwiaWF0IjoxNjgwMjkxMjQ3fQ.uUxP9zfAul33_WUULS_iiK_mWqzr4hPkAfmcM02a3rQ&type=account";
    window.open(url, "_blank");
  }
}
