import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MainpageComponent } from "../mainpage/mainpage.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MainpageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  // loginForm: FormGroup;
  dynamicContent: string = '  Register';
  forget: string = '  Forget Password';
  usrEmail: string = '';
  usrPassword: string = '';

  constructor(private router: Router) {}

  login(){
    if(this.usrEmail == 'hemant' && this.usrPassword == 'hemant@123'){
      this.router.navigate(['mainpage']);
    }
    else{
      this.router.navigate(['LoginComponent']);
    }
    // alert("hi " + this.usrEmail + " and your password is " + this.usrPassword);
  }
}

