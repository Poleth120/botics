import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  roles: string | any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  public myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl([], Validators.required)
  });


  constructor(private authService: AuthService) {
    this.myForm.setValue({
      username: '',
      email: '',
      password: '',
      role: []
    });
   }

   ngOnInit(): void {

   }

   /*
  public obtenerUsuario(form:any) {
    let data = {
      username: form.username,
      email: form.email,
      password: form.password,
      role: ['profesor']
    }
    console.log(data)
    this.authService.register( data.username ,data.email,data.role,data.password).subscribe((res)=>{
        console.log(res)
    })


  }
  */

  onSubmit(): void {
    const { username, email, role, password } = this.form;
    console.log(this.roles)
    this.authService.register(username, email, [this.roles], password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}



