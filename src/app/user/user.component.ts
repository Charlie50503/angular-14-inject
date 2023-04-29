import { Component, Inject, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  // name:string = "";
  // // 方法一
  // constructor(
  //   // private userService:UserService
  // ){
  //   // this.name = this.userService.userInfo.name
  // }

    name:string = "";
  // 方法一 使用自定義名稱
  constructor(
    @Inject("USERS_SERVICE") private userService:UserService
  ){
    this.name = this.userService.userInfo.name
  }

  // angular 14 寫法
  // name:string = "";
  // userService = inject(UserService);

  // constructor(
  // ){
  //   this.name = this.userService.userInfo.name
  // }
}
