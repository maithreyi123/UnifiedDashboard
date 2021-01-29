import { Injectable } from '@angular/core';
import { IProduct } from './home/homePage';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {    //example for creating service

private productUrl = 'assets/products/products.json';

  constructor(private http: HttpClient) { }  // declaring http as a variable to hold the instance of httpclient

//example for Observable, returning products data from json file using http operator(method ) in observable
getProducts(): Observable<IProduct[]>{  //instead of hardcoding the objects in component,we r creating service which returs the array of objects and calling this service in home component
  return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data =>(console.log('All' + JSON.stringify(data))),  // here tap and catcherror both are operators used for exception handling, seperated by commas and to use them we need to access pipe 
        catchError(this.handleError))   
  )


// for code operations follow @debhokorahk github link
// this method is used for editing the products: for edit view
//   this.getProducts(id: number): Observable<Products>{
//   if(id ==0){
//     return of(this.ini
//   }


// }
  


  // 1. hardcoded array in component class
  // 2. palced array in service class and called that service
  //3. placed array of objects in json file and accessing that using httpclient (observables)

  //[        
  //   {
  //     "productId" : 11,
  //     "productName" : "pen",
  //     "productPrice" : 50,
  //     "productImage" : "/assets/images/pen.png",
  //     "productCode" : "gnd-880",     //Example for pipe transformation, tranforming '-' to ''
  //     "startRating" : "3.2"
  //   },
  //   {
  //     "productId" : 12,
  //     "productName" : "Table",
  //     "productPrice" : 500,
  //     "productImage" : "/assets/images/table.png",
  //     "productCode" : "tnx-775",
  //     "startRating" : "5.0"
  //   }
  // ]
}
  handleError(handleError: any): (e: any) => void {
     //handleError is builtin method used for calling catcherror method for handling exceptions
    throw new Error("Method not implemented...");
}
