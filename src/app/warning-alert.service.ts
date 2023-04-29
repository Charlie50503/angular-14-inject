import { Injectable } from '@angular/core';
import { AlertBaseService } from './alert-base.service';

@Injectable({
  providedIn: 'root'
})
export class WarningAlertService extends AlertBaseService {

  constructor() {
    super()
  }
}
