import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  //product: Products;

  constructor(private route: ActivatedRoute, private productService: ProductServiceService) { }  // using activatedroute to get data using the url parameters

  ngOnInit(): void {
    //subscribing to the paramamp observable to get data using 'id' parameter in the url, w'll get notifications whenever thre url parametrs changes when we subcribe to the paramap
    this.route.paramMap.subscribe(
   params => {
    const id = +params.get('id');  
   this.getProduct(id);
   }
      
    )
  }

  getProduct(id: number): void{
   // this.productService.getProducts(id).subscribe({
    //  next: product => this.onProductRetreived(product);
  //  })
  }

}
