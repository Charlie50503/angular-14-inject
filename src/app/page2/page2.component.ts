import { Component } from '@angular/core';
import { getRouteParam } from './getRouteParam';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {
  id = getRouteParam("id")
}
