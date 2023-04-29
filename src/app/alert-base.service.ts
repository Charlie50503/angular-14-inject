import { Injectable, inject } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AlertBaseService {
  // userService = inject(UserService)
  constructor(
    // private userService:UserService
  ) { }


  displayAlert(str:string){
    alert(str)
  }
}
