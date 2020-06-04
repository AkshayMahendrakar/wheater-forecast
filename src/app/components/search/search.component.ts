import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Output() dataToEmit = new EventEmitter<object>();
  cityForm: any;
  searchList: string[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.cityForm = this.formBuilder.group({
      searchCity: ['', Validators.required],
    });
  }
  onAdd() {
    console.log(this.cityForm.value.searchCity);
    if (this.searchList.length >= 10) {
      this.searchList.pop();
    }
    this.searchList.unshift(this.cityForm.value.searchCity);
  }

  cityClicked(event) {
    console.log('event.target.value', event);
    this.router.navigate(['/home', { weather: event.target.innerText }]);
  }
  removeItem(i){
    this.searchList.splice(i,1);
  }
}
