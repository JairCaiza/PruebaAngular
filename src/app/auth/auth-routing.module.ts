import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
   {path:'',
   children:[
     {path:'login',component:LoginComponent},
     {path:'register',component:RegisterComponent},
     {path:'home',component:HomeComponent},
     {path:'**',redirectTo:'home'},
   ]

  }
];

@NgModule({
  declarations: [],
  imports: [
RouterModule.forChild(routes),

  ]
})
export class AuthRoutingModule { }
