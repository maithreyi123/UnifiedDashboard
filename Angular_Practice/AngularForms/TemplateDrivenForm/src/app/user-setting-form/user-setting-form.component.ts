import { Component, OnInit } from '@angular/core';
import { userSettings } from '../data/userSetting';
import { NgForm } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {
 

  //this onject is used for two-way data binding using ngmodel
  OriginaluserSettings : userSettings ={  
       name: 'Leela',
       check: true,
       ExampleforRadio: 'light',
       select: 'Dark',
       textbox: 'text goes here'
      
     };

     subsTypes : Observable<string[]>;

     //copying to another object , jst having a copy of original data
     userSettings  :userSettings ={   ...this.OriginaluserSettings };


  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
this.subsTypes = this.dataService.getServiceData();

  }


  onSubmit(form: NgForm){
    console.log('this is msg: ', form.valid);  //this displays in the console : form.valid returns boolean value
  this.dataService.postSetting(this.userSettings).subscribe(   //have to subcribe the data when we r using observables
    result => console.log('success: ', result),
    error => console.log('error: ', error)
  )
  
  }


  
}
