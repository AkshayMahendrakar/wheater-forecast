import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnChanges {
  weatherList = [];
  showData = false;
  forecastArray = [];

  constructor(public dataService: DataService, private route: ActivatedRoute, private apiService: ApiService) {
    console.log('test', this.route);

    this.route.params.subscribe(
      (params: Params) => {
        console.log(params['weather']);
        this.getWheater(params['weather'])
      }

    )
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit() {
  }
  getWheater(city) {
    if (city) {
      this.weatherList = [];
      this.apiService.getCityWheaterData(city).subscribe(res => {
        //if data needs to be shared among the app use below service
        // this.dataService.setcitydata = res;
        var obj = {};
        obj = res;
        this.weatherList.push(obj)
        this.showData = true
        this.loadNextdaysData(this.weatherList[0].name);
      });
    }
  }
  loadNextdaysData(city) {
    this.forecastArray = [];
    this.apiService.getCityforecastData(city).subscribe(res => {
      var obj = {};
      obj = res;
      this.forecastArray.push(obj);
      console.log("forecast", this.forecastArray[0].list)
    })
  }
}
