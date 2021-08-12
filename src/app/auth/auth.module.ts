import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NabvarComponent } from './pages/nabvar/nabvar.component';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NabvarComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

  ],
  exports:[NabvarComponent]

})
export class AuthModule { }
