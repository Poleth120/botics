import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerD:any;

  visible:boolean=true;
  changetype:boolean=true;
  viewpass(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }


  form: any = {
    name:null,
    lastName:null,
    username: null,
    email: null,
    password: null
  };
  roles: string | any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  public myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl([], Validators.required)
  });


  constructor(private authService: AuthService) {
    this.myForm.setValue({
      name: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      role: []
    });
   }

   ngOnInit(): void {

   }

  onSubmit(): void {
    const { name, lastName, username, email, role, password } = this.form;
    console.log(this.roles)
    this.authService.register(username, email, name, lastName, [this.roles], password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.detail;
        this.isSignUpFailed = true;
      }
    });
  }
}



