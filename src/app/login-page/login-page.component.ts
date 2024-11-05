import { Component } from '@angular/core';
import { LoginLeftComponentComponent } from '../shared/login-left-component/login-left-component.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginLeftComponentComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor() { }

imgSrc: string ='../../assets/icons/showPassword.svg'
  
togglePasswordVisibility() {
      const passwordInput = document.getElementById('password') as HTMLInputElement;

      if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          this.imgSrc = '../../assets/icons/hide-password.svg';
      } else {
          passwordInput.type = 'password';
          this.imgSrc = '../../assets/icons/showPassword.svg';
         
      }
  }

}
