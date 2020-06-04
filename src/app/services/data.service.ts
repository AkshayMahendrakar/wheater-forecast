import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cityData = {};

  get getcitydata() {
    return this.cityData;
  }

  set setcitydata(value) {
    this.cityData = value;
  }

  constructor() { }
}
