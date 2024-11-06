import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  isPopupOpen: boolean= false;
  jobName = 'Customer Service Application';
  Email = 'csa@gmail.com';
  phone  = '+233 54 341 9549'; 

  openPopup() {  
    this.isPopupOpen = true;  
  }  
  
  closePopup() {  
    this.isPopupOpen = false;  
  }  

}
