import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-invite-page',
  standalone: true,
  imports: [NgxPaginationModule,CommonModule],
  templateUrl: './invite-page.component.html',
  styleUrls: ['./invite-page.component.css']
})
export class InvitePageComponent implements OnInit {
  // Sample data array
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
    // Add more sample data or replace it with dynamically fetched data
  ];

  // Current page variable
  currentPage = 1;

  ngOnInit(): void {
    // If you need to fetch data from an API, do it here
  }
}
