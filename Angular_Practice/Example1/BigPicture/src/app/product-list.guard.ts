import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//example for guards:
export class ProductListGuard implements CanActivate {  // ProductListGuard is like service and implements canActivate interface

constructor(private router: Router){}  //router for routing to welcome component

//this interface has method to perform required operations
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//logic for getting the id parameter from url
let id = +next.url[1].path;  
if(isNaN(id) || id< 1){  //checking if id is not a number or les than 1 then it rediects to welcom page
alert('invalid url');
  this.router.navigate(['/welcome']);
  return false
};  //at the same time add this canActivte to required path of routerModule array



    return true;
  }
  
}
