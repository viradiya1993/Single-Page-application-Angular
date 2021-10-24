import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CustomerComponent } from '../customer/customer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customer-add', component: CustomerComponent },
  { path: "**", component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
