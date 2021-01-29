import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { StarComponentComponent } from './star-component/star-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductListGuard } from './product-list.guard';
import { ProductEditComponent } from './product-edit/product-edit.component';
@NgModule({
  declarations: [    //our components,services and pipes goes here insise declarations
    AppComponent,
    HomeComponent,
    ConvertToSpacePipe,
    StarComponentComponent,
    ProductListComponent,
    WelcomeComponent,
    ProductEditComponent
  ],
  imports: [       // all the angular defined modules or thid party modules goes here
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,   // importing HttpClientModule for http request 
   
    RouterModule.forRoot([     // importing routermodule for rrot access and defining paths with components for navigating to another view
     //here the order of paths defined is important, router takes the first match that founds
      {path: 'welcome', component: WelcomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'products', component: HomeComponent},
      {path: 'products/:id', 
      canActivate: [ProductListGuard],
      component: ProductListComponent},  //passing paramters in the url to get products data
      {path: 'products/:id/edit', component: ProductEditComponent},
      {path: 'products/0/edit', component: ProductEditComponent},
      {path: ' ', redirectTo: 'WelcomeComponent', pathMatch:'full' },   //this is default route, for empty url , it redirects to welcome component
      {path: '**', redirectTo: 'WelcomeComponent', pathMatch:'full' }  // this is wildcard route ,for wrong url, it redirects to weolcome component
      
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
