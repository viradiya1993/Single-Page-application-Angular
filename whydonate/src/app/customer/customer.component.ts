import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: FormGroup;
  loader: boolean = false;
  customer_id: any;
  constructor(private formBuilder: FormBuilder, public customerService: CustomerService, private router: Router) { }
  ngOnInit(): void {
    this.customers = this.formBuilder.group({
			name: [null, Validators.required],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.required],
			address: ['', Validators.required],
		})
  
  }

 

  //Save
  save() {
    if (this.customers.invalid) {
      return
    }
    let data = {
			name: this.f.name.value,
			email: this.f.email.value,
			phone: String(this.f.phone.value),
			address: this.f.address.value,
		}
    if (!this.loader) {
      this.loader = true;
      this.customerService.addCustomer(data).subscribe((res: any) => {
        if (res) {
          this.loader = false;
          console.log(res);
          this.customers.reset();
          Swal.fire('', 'Customer Added', 'success')
          this.router.navigate(['/home']);
        }
      }, err => {
        console.log(err);
        
      });
    }
  }

  

  get f() {
		return this.customers.controls;
	}
}
