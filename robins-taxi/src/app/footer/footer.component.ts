import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"],
  standalone: true,
  imports: [RouterLink, TranslateModule]
})
export class FooterComponent {

  // onNavigatetoTaxiReservation() {
  //   const url =
  //     "https://portal.pergorides.io/reservation/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYm5hbWUiOiJwZXJnbzMzOTY0Y2FyIiwiaWF0IjoxNjgwMjkxMjQ3fQ.uUxP9zfAul33_WUULS_iiK_mWqzr4hPkAfmcM02a3rQ&type=passenger";
  //   window.open(url, "_blank");
  // }

  onNavigatetoMedicalReservation() {
    const url =
      "https://www.medanswering.com/";
    window.open(url, "_blank");
  }
}
