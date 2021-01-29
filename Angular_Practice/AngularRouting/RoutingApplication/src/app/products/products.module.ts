import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsEditComponent } from '../products-edit/products-edit.component';
import { ProductsDetailsComponent } from '../products-details/products-details.component';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'products', component: ProductsComponent},
      //Parameterrized route
      {path: 'products/:id', component: ProductsDetailsComponent},   //example for routing with parameters
      {path: 'products/:id/edit', component: ProductsEditComponent}
    ])
  ]
})
export class ProductsModule { }
