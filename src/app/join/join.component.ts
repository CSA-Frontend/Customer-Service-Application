import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
isPopupOpen: boolean= false;
}

// isPopupOpen(){
//   this.isPopupOpen =true;
// }
// isPopupClose(){
//   this.isPopupOpen =true;
// }
