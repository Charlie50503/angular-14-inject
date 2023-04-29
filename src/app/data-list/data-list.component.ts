import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent {
  http = inject(HttpClient)

  data:any = "";
  constructor(){
    this.http.get("https://dummyjson.com/products/1").subscribe(res=>this.data=res)
  }

}
