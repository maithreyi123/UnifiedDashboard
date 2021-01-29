import { Component, OnInit } from '@angular/core';
import { IProduct } from './homePage';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {   //implementing OnInit interface

  //DataBinding example, interpolation binding -- one way data binding
  PageTitle : String = 'Angular Application';

  //used for property Binding , one way data binding
  imageWidth: number = 50;
  imageHeight: number = 50;
  showImage :boolean = false; // intially setting showImage value to false, as no image is viewed 

  //consider listFilter exmple for filtering items an arraylist
  _listFilter: string ='cart'; // used for ngModule -- two way data binding
  errorMessage: string;

  get listFilter(): string{   // get method : to get data whenever user need
 return this._listFilter;
  }
 set listFilter(value: string){  // set method : to set any value
   this._listFilter = value;   // _listFilter coontains modified value and this is returned in get method
  
  //if listfilter contains any data then performfilter method will be executed or else it displays all the products
   this.filteredProduct = this.listFilter? this.performFilter(this.listFilter): this.Products;
 }
  

filteredProduct : IProduct[]; // consider this for an exmple of filtering

  //array of items to display using *ngIf Directive
  Products : IProduct[] = [  //Example : using Iproduct interface as a datatype
    // {
    //   "productId" : 11,
    //   "productName" : "pen",
    //   "productPrice" : 50,
    //   "productImage" : "/assets/images/pen.png",
    //   "productCode" : "gnd-880",     //Example for pipe transformation, tranforming '-' to ''
    //   "startRating" : "3.2"
    // },
    // {
    //   "productId" : 12,
    //   "productName" : "Table",
    //   "productPrice" : 500,
    //   "productImage" : "/assets/images/table.png",
    //   "productCode" : "tnx-775",
    //   "startRating" : "5.0"
    // }
  ]   // we have our array list of objects data in produsctservice so removing the actual array and calling it from productservice


//constructor is a function executed when component is frst intialized

  constructor(private productService: ProductServiceService) {  // injecting ProductServiceService, here the parameter productService holds the instance of service class and using this paramter in ngoninit
     // inside constructor we can set default values to our arrays, variables
    // this.filteredProduct = this.Products;   //commenting this here and adding it in ngonit() bcz constructor will be frst executed before ngonit()executes and this.products will be empty
    // this.listFilter = 'cart';

  }

//ngOnInit function is good place to retrieve data so assigning variable to get data from service class

  ngOnInit(): void {
   
   // this.Products = this.productService.getProducts();    //calling getproducts() method to get the array data

   this.productService.getProducts().subscribe(      //example for subscribing an observable 
     {
       next: products =>            //next and error are the operators used to emit values after one emits another
       {
        this.Products= products;
        this.filteredProduct = this.Products;
       } ,
       error: err => this.errorMessage = err
     });
  }

//1. void, bucz our method have no return type
toggleImage(): void{
  this.showImage = !this.showImage;   // when this method is called showImage value becomes true 

}

//2. method to perform filtering , returns an array
performFilter(filterBy: string): IProduct[]{
  filterBy = filterBy.toLocaleLowerCase();   // here filtering with lowercase
  return this.Products.filter((product: IProduct) =>   // refer some examples in angular for this
    product.productName.toLocaleLowerCase().indexOf(filterBy)!== -1 // productname is converted to lowercase and index of it isused to termimnate the productname
  )
}
//3. getting data from star component and displays when this method executes
OnRatingClicked(message : string): void{
this.PageTitle = 'productlist : ' + message ;
}

  
}
