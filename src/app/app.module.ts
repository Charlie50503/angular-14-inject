import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { DataListComponent } from './data-list/data-list.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DataListComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // UserService // 方法一
    // {provide:UserService,useClass:UserService} // 方法一實際上會變成
    {provide:"USERS_SERVICE",useClass:UserService} // 因為provide只是提供一個唯一名稱,所以我們也可以這樣寫
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
