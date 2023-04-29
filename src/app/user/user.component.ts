import { Component, Inject, inject } from '@angular/core';
import { UserService } from '../user.service';
import { IUserServiceConfig, USERS_SERVICE_TOKEN, USERS_SERVICE_TOKEN_CONFIG } from '../app.module';

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

    // name:string = "";
  // // 方法一 使用自定義名稱
  // constructor(
  //   @Inject("USERS_SERVICE") private userService:UserService,
  //   @Inject("USERS_SERVICE_CONFIG") private userConfig:IUserServiceConfig
  // ){
  //   this.name = this.userService.userInfo.name + this.userConfig.apiUrl
  // }


  name:string = "";
  // 方法一 使用自定義名稱
  constructor(
    @Inject(USERS_SERVICE_TOKEN) private userService:UserService,
    @Inject(USERS_SERVICE_TOKEN_CONFIG) private userConfig:IUserServiceConfig
  ){
    this.name = this.userService.userInfo.name + this.userConfig.apiUrl
  }

  // angular 14 寫法
  // name:string = "";
  // userService = inject(UserService);

  // constructor(
  // ){
  //   this.name = this.userService.userInfo.name
  // }
}
