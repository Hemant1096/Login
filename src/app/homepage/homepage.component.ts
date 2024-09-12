import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'; // Import MatListModule
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatCardModule,MatToolbarModule,MatListModule,MatIconModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
