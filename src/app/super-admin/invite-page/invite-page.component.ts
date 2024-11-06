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
    { id: 1, companyName: 'Company A', email: 'contact@companya.com', description: 'Description for Company A', dateSubmitted: '2024-11-01' },
    { id: 2, companyName: 'Company B', email: 'contact@companyb.com', description: 'Description for Company B', dateSubmitted: '2024-11-02' },
    { id: 3, companyName: 'Company C', email: 'contact@companyc.com', description: 'Description for Company C', dateSubmitted: '2024-11-03' },
    { id: 4, companyName: 'Company D', email: 'contact@companyd.com', description: 'Description for Company D', dateSubmitted: '2024-11-04' },
    { id: 5, companyName: 'Company E', email: 'contact@companye.com', description: 'Description for Company E', dateSubmitted: '2024-11-05' },
    { id: 6, companyName: 'Company F', email: 'contact@companyf.com', description: 'Description for Company F', dateSubmitted: '2024-11-06' },
    { id: 7, companyName: 'Company G', email: 'contact@companyg.com', description: 'Description for Company G', dateSubmitted: '2024-11-07' },
    { id: 8, companyName: 'Company H', email: 'contact@companyh.com', description: 'Description for Company H', dateSubmitted: '2024-11-08' },
    { id: 9, companyName: 'Company I', email: 'contact@companyi.com', description: 'Description for Company I', dateSubmitted: '2024-11-09' },
    { id: 10, companyName: 'Company J', email: 'contact@companyj.com', description: 'Description for Company J', dateSubmitted: '2024-11-10' },
    { id: 11, companyName: 'Company K', email: 'contact@companyk.com', description: 'Description for Company K', dateSubmitted: '2024-11-11' },
    { id: 12, companyName: 'Company L', email: 'contact@companyl.com', description: 'Description for Company L', dateSubmitted: '2024-11-12' },
    { id: 13, companyName: 'Company M', email: 'contact@companym.com', description: 'Description for Company M', dateSubmitted: '2024-11-13' },
    { id: 14, companyName: 'Company N', email: 'contact@companyn.com', description: 'Description for Company N', dateSubmitted: '2024-11-14' },
    { id: 15, companyName: 'Company O', email: 'contact@companyo.com', description: 'Description for Company O', dateSubmitted: '2024-11-15' },
    { id: 16, companyName: 'Company P', email: 'contact@companyp.com', description: 'Description for Company P', dateSubmitted: '2024-11-16' },
    { id: 17, companyName: 'Company Q', email: 'contact@companyq.com', description: 'Description for Company Q', dateSubmitted: '2024-11-17' },
    { id: 18, companyName: 'Company R', email: 'contact@companyr.com', description: 'Description for Company R', dateSubmitted: '2024-11-18' },
    { id: 19, companyName: 'Company S', email: 'contact@companys.com', description: 'Description for Company S', dateSubmitted: '2024-11-19' },
    { id: 20, companyName: 'Company T', email: 'contact@companyt.com', description: 'Description for Company T', dateSubmitted: '2024-11-20' },
    { id: 21, companyName: 'Company U', email: 'contact@companyu.com', description: 'Description for Company U', dateSubmitted: '2024-11-21' },
    { id: 22, companyName: 'Company V', email: 'contact@companyv.com', description: 'Description for Company V', dateSubmitted: '2024-11-22' },
    { id: 23, companyName: 'Company W', email: 'contact@companyw.com', description: 'Description for Company W', dateSubmitted: '2024-11-23' },
    { id: 24, companyName: 'Company X', email: 'contact@companyx.com', description: 'Description for Company X', dateSubmitted: '2024-11-24' },
    { id: 25, companyName: 'Company Y', email: 'contact@companyy.com', description: 'Description for Company Y', dateSubmitted: '2024-11-25' },
    { id: 26, companyName: 'Company Z', email: 'contact@companyz.com', description: 'Description for Company Z', dateSubmitted: '2024-11-26' },
  ];

  currentPage = 1;
  itemsPerPage = 5;

  getTotalPages(): number {
    return Math.ceil(this.inviteData.length / this.itemsPerPage);
  }

  getPaginationButtons(): (number | string)[] {
    const totalPages = this.getTotalPages();
    const buttons: (number | string)[] = [];

    // Determine the range of pages to show
    const showEllipsisLeft = this.currentPage > 3;
    const showEllipsisRight = this.currentPage < totalPages - 2;

    // Start with the first page
    buttons.push(1);

    // Add left ellipsis if needed
    if (showEllipsisLeft) {
      buttons.push('...');
    }

    // Calculate the range of middle buttons
    let startPage = Math.max(2, this.currentPage - 1); // Start with the current page - 1
    let endPage = Math.min(totalPages - 1, this.currentPage + 1); // End with the current page + 1

    // Ensure we always show 5 buttons
    if (buttons.length + (endPage - startPage + 1) < 5) {
      if (showEllipsisLeft) {
        startPage = Math.max(2, endPage - (5 - buttons.length) + 1);
      } else {
        endPage = Math.min(totalPages - 1, startPage + (5 - buttons.length) - 1);
      }
    }

    // Add middle page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    // Add right ellipsis if needed
    if (showEllipsisRight) {
      buttons.push('...');
    }

    // Always show the last page if there are more than one page
    if (totalPages > 1) {
      buttons.push(totalPages);
    }

    // Ensure we only return exactly 5 buttons
    while (buttons.length > 5) {
      if (buttons[1] === '...') {
        buttons.splice(1, 1); // Remove the first ellipsis
      } else {
        buttons.pop(); // Remove the last page number if it's the last item
      }
    }

    return buttons;
  }



  isPageNumber(page: string | number): page is number {
    return typeof page === 'number';
  }
}
