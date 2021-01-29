import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsModule } from './products/products.module';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
//import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsDetailsComponent,
    ProductsEditComponent
 //  ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //here the feature modules takes 1st order for execution before routermodule, as routermodule has wildcard entry, there is chance  of not finding the feature modules if they are placed after routermodules
    ProductsModule,   //shld import the feature module i.e child module
    RouterModule.forRoot([
     
      {path:'welcome', component: WelcomeComponent},
     // {path:'products', component: ProductsComponent},   commenting here and adding it to products module 
      {path:' ', redirectTo: '/welcome', pathMatch: 'full'},
    //  {path:'**', redirectTo: 'welcome', pathMatch: 'fullMatch'}   // wildcard routes
      
    ])    //importing routermodule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
