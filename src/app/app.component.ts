import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvitePageComponent } from "./super-admin/invite-page/invite-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvitePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Customer-Service-Application';
}
