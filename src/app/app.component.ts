import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JoinComponent } from "./join/join.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JoinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Customer-Service-Application';
  jobName = 'Customer Service Application'
  Email = 'csa@gmail.com';
  phone  = '+233 54 341 9549';
}
