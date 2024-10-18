import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  // loginForm: FormGroup;
  dynamicContent: string = '  Register';
  forget: string = '  Forget Password';
  usrEmail: string = '';
  usrPassword: string = '';

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  login(){
    if(this.usrEmail == '' || this.usrPassword == ''){
      this.showToast("Please Enter username and Password");
    }
    else{
      if(this.usrEmail == 'hemant' && this.usrPassword == 'hemant@123'){
        this.router.navigate(['mainpage']);
      }
      else{
        this.showToast('Please Enter correct Username or Password');
        // alert("Please Enter correct Username or Password");
        this.router.navigate(['login']);
      }
    }
    
    // alert("hi " + this.usrEmail + " and your password is " + this.usrPassword);
  }
  signup(event:Event){
    debugger;
    event.preventDefault();
    this.router.navigate(['signup']);
  }
  showToast(message: string) {
    this.snackBar.open(message,'', {
      duration: 5000, // duration in milliseconds
      verticalPosition: 'top', // or 'bottom'
      horizontalPosition: 'right', // 'start', 'center', 'end', 'left', 'right'
    });
  }
}