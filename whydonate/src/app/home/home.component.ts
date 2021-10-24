import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../_services/customer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CustomerViewComponent } from '../customer-view/customer-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['name', 'email', 'phone', 'address','action'];
 
  constructor(public customerService: CustomerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

 

  //Fetch Customer
  getAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  viewCustomer(customer: any) {
    const dialogRef = this.dialog.open(CustomerViewComponent, {
			width: '500px',
      height: '500px',
			data: { customerData: customer }
		});
  }
}
