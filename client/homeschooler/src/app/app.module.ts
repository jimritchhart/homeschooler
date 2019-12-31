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
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ValidateUserLoginService } from './services/validate-user-login.service';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';


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
    LoginComponent
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
    MatIconModule
  ],
  providers: [ValidateUserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
