import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { DataListComponent } from './data-list/data-list.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { BaseButtonComponent } from './base-button/base-button.component';
import { WarningButtonComponent } from './warning-button/warning-button.component';

export interface IUserServiceConfig {
  apiUrl: string
}

export const USERS_SERVICE_TOKEN = new InjectionToken<UserService>("用戶資料")
export const USERS_SERVICE_TOKEN_CONFIG = new InjectionToken<IUserServiceConfig>("用戶資料配置")

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DataListComponent,
    Page1Component,
    Page2Component,
    BaseButtonComponent,
    WarningButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // UserService // 方法一
    // {provide:UserService,useClass:UserService} // 方法一實際上會變成
    { provide: USERS_SERVICE_TOKEN, useClass: UserService }, // 因為provide只是提供一個唯一名稱,所以我們也可以這樣寫
    // 因為provide只是提供一個唯一名稱,所以我們也可以這樣寫
    {
      provide: USERS_SERVICE_TOKEN_CONFIG, useValue: {
        apiUrl: "http://localhost:3004/user"
      }
    } // 因為provide只是提供一個唯一名稱,所以我們也可以這樣寫
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
