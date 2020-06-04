import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCityWheaterData(data) {
    const appId = environment.appId;
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + data + '&appid=' + appId);
  }

  getCityforecastData(data) {
    const appId = environment.appId;
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + data + '&cnt=5&appid=' + appId);
  }

}
