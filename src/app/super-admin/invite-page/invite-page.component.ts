import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invite-page',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './invite-page.component.html',
  styleUrls: ['./invite-page.component.css']
})
export class InvitePageComponent {
  inviteData = [
    { id: 1, name: 'Invite 1' },
    { id: 2, name: 'Invite 2' },
    { id: 3, name: 'Invite 3' },
    { id: 4, name: 'Invite 4' },
    { id: 5, name: 'Invite 5' },
    { id: 6, name: 'Invite 6' },
    { id: 7, name: 'Invite 7' },
    { id: 8, name: 'Invite 8' },
    { id: 9, name: 'Invite 9' },
    { id: 10, name: 'Invite 10' },
    { id: 11, name: 'Invite 11' },
    { id: 12, name: 'Invite 12' },
    { id: 13, name: 'Invite 13' },
    { id: 14, name: 'Invite 14' },
    { id: 15, name: 'Invite 15' },
  ];

  currentPage = 1;
  itemsPerPage = 5;

  getTotalPages(): number {
    return Math.ceil(this.inviteData.length / this.itemsPerPage);
  }
}
