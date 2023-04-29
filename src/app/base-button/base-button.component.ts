import { Component, inject } from '@angular/core';
import { AlertBaseService } from '../alert-base.service';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent {
  protected alertBaseService = inject(AlertBaseService)


  onClick(){
    this.alertBaseService.displayAlert("clicked")
  }
}
