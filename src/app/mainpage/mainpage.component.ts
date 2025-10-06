import { Component, OnInit, Injectable } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { HomepageComponent } from "../homepage/homepage.component";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    MatTabsModule,
    HomepageComponent
],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})

@Injectable({
  providedIn: 'root',
})
export class MainpageComponent implements OnInit {
  isHandset$: Observable<boolean> = of(false);

  // Constructor initializes BreakpointObserver
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  menuItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];
  // Initialization logic in ngOnInit
  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }
  logout(){
    this.router.navigate(['login']);
  }
}


