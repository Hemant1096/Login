// import { NgModule} from '@angular/core';
import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BranchComponent } from './branch/branch.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'mainpage', component: MainpageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'branch', component: BranchComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
export class AppRoutingModule{

}
