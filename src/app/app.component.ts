import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JoinComponent } from "./join/join.component";
import { PopupComponent } from "./popup/popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JoinComponent, PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Customer-Service-Application';
}
