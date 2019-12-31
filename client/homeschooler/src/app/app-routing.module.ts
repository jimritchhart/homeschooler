import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LogoutComponent} from './logout/logout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
 //{ path: '', component: AppComponent, }, 
 { path: 'login', component: LoginComponent},
 { path: 'welcome', component: LoginComponent, canActivate:[RouteGuardService]},
 //{ path: '#myModal', component: LoginComponent},
 { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] }
 //{ path: '**', component: LoginRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
