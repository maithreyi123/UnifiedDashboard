import { Component, OnInit } from '@angular/core';
import { IProduct } from '../home/homePage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
//this component is created for routing example 
export class ProductListComponent implements OnInit {

  pageTitle: string ='product-list example for retreiving data for id ';
  product: IProduct;    //importing and using Iproduct interface
  id: number;
  // route variable holds the instance of activatedroute, so we can use route to get methods
  constructor(private route: ActivatedRoute, private router: Router) { }   //  Router is used to route between the components

  //as this is best way to reteive data w'll include code inside ngoninit() to get data through url parametrs
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');  //why + is used here means, this value returns string datatype but our id defined in inteface id number. so to convert string to number we used '+'
    this.pageTitle += `: ${id}`; //binding id to display the id value
   
    this.product = {    //this object is used to retreive data 
        'productId' : id,
        'productName' : 'bench',
        'productPrice' : 1000,
        'productImage' : '/assets/images/pen.png',
        'productCode' : 'cdv-3337',     
        'startRating' :'4.0'
      
           

    }
  }

  //method to navigate to home component i.e, shows productslist using navigate method
  onBack(): void{
    this.router.navigate(['/home']);

  }


}
