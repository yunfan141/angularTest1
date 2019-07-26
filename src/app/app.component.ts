import { Component } from '@angular/core';

@Component({
  selector: 'customer-database',
  template: `
            <customer-table  (clicked)="onClicked($event)"></customer-table>
            <info-table [customerSlug] = "clikedCustomer"></info-table>
            `
})
export class AppComponent {
  clikedCustomer: string;
  onClicked(customer: string) {
    this.clikedCustomer = customer;
  }
}
