import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-out/login-register/login-register.component';
import { LogoutComponent} from './login-out/logout/logout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-out/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
 { path: '', component: AppComponent, }, 
 //{ path: 'login', component: LoginComponent},
 { path: 'welcome', component: WelcomeComponent},
 //{ path: '#myModal', component: LoginComponent},
 { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
 { path: '**', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
