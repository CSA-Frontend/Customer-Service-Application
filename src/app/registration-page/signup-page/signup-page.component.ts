
import { Component } from '@angular/core';
import { LoginLeftComponentComponent } from '../../shared/login-left-component/login-left-component.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [LoginLeftComponentComponent,RouterOutlet, CommonModule, FormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  
  // Default icons for password visibility
  passwordImgSrc: string = 'assets/icons/showPassword.svg';
  confirmPasswordImgSrc: string = 'assets/icons/showPassword.svg';

  // Toggle visibility for password
  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
      this.passwordImgSrc = this.passwordVisible ? 'assets/icons/hide-password.svg' : 'assets/icons/showPassword.svg';
    } else if (field === 'confirmPassword') {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
      this.confirmPasswordImgSrc = this.confirmPasswordVisible ? 'assets/icons/hide-password.svg' : 'assets/icons/showPassword.svg';
    }
  }
}



