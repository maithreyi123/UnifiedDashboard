import { Injectable } from '@angular/core';
import { userSettings } from './data/userSetting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({

  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http : HttpClient) { }

  //example for observables : posting data using observables
  // postSetting(userSetting : userSettings): Observable<userSettings>{
  // return of(userSetting);  //using of function to return usersettings data
  // }

  //example for http client
  postSetting(userSetting : userSettings): Observable<any>{
    return this.http.post('url', userSetting);  // here we can give any url to post our data in the form of json object
    }

    getServiceData(): Observable<string[]>{
      return of(['Monthly', 'Lifetime', 'Annual']);
    }

}
