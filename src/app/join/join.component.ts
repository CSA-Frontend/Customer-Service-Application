import { Component } from '@angular/core';
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  isPopupOpen: boolean= false;
  
  openPopup() {  
    this.isPopupOpen = true;  
    console.log(this.isPopupOpen);
    
  }  

  
  closePopup() {  
    this.isPopupOpen = false;  
  }  
};

