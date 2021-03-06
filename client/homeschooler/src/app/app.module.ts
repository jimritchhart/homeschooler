import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ProductsComponent } from './app-footer/products/products.component';
import { ResourcesComponent } from './app-footer/resources/resources.component';
import { HsimagesComponent } from './app-header/hsimages/hsimages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { LoginRegisterComponent } from './login-out/login-register/login-register.component';
//import { ValidateUserLoginService } from './services/Not_Used_validate-user-login.service';
import { LogoutComponent } from './login-out/logout/logout.component';
import { LoginComponent } from './login-out/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderSummaryComponent } from './header-summary/header-summary.component';
import { BodySummaryComponent } from './body-summary/body-summary.component';
import { LoginOutComponent } from './login-out/login-out.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SetupschoolComponent } from './gettingstarted/setupschool/setupschool.component';
import { SetupstudentsComponent } from './gettingstarted/setupstudents/setupstudents.component';
import { HttpIntercepterBasicAuthService } from './services/http/http-intercepter-basic-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ProductsComponent,
    ResourcesComponent,
    HsimagesComponent,
    LoginRegisterComponent,
    LogoutComponent,
    LoginComponent,
    WelcomeComponent,
    NavbarComponent,
    HeaderSummaryComponent,
    BodySummaryComponent,
    LoginOutComponent,
    SetupschoolComponent,
    SetupstudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [//ValidateUserLoginService, 
              LogoutComponent
             ,{provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
