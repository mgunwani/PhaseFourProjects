import { Customer } from './../models/customer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  title: string = "Customer Management System!!";

  customerObj: any = {
    code: 1001,
    name: "King Kochhar",
    amount: 10000
  }

  custObj: Customer = {
    CustomerCode: 1002,
    CustomerName: "John Smith",
    CustomerAmount: 20000
  };

}
