// import { NgModule} from '@angular/core';
import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
    { path: 'mainpage', component: MainpageComponent },
    { path: '**', redirectTo: '' }
];
export class AppRoutingModule{

}
