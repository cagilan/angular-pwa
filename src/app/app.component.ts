import { Component, OnInit } from '@angular/core';
import { Item, ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa';
  items: Array<Item>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetch().subscribe(
      (data: Array<Item>) => {
        this.items = data;
      }, (err) => {
        console.log(err);
      });
  }
}
