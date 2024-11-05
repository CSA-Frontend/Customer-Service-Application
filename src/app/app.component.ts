import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginLeftComponentComponent } from "./shared/login-left-component/login-left-component.component";
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Customer-Service-Application';
}
