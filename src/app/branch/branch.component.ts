import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.css'
})
export class BranchComponent {
  branch: string = '';
  selectedOption: string = 'SE';
  FinYear: string = '';

 constructor(private router: Router) {}

  onSubmit() {
    if(this.branch == "" || this.FinYear == ""){
      alert("Please Enter Branch and Financial Year");
    }
    else{
      console.log('Branch:', this.branch);
      console.log('Selected Option:', this.selectedOption);
      console.log('Financial Year:', this.FinYear);
      this.router.navigate(['mainpage']);
    }

    // Do something with the data, e.g., send to API
  }
}
