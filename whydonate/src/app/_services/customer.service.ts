import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + '';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  //Fetch Customer list
  getAllCustomers() {
    return this.http.get(BACKEND_URL + '/customer');
  }

  //Add Customer
  addCustomer(data: any) {
    return this.http.post(BACKEND_URL + '/customer/', data);
  }
}
