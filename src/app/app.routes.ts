// import { NgModule} from '@angular/core';
import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'mainpage', component: MainpageComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
export class AppRoutingModule{

}
