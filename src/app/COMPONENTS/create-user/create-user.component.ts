import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  visible:boolean=true;
  changetype:boolean=true;
  viewpass(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }

  longText = `Registrar nuevos usuarios de tipo pasante, para lo cual debes llenar los siguientes campos:`;

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
  constructor(private adminService: AdminService) {
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
    const { username, email, name, lastName, role, password } = this.form;
    console.log(this.roles)
    this.adminService.register(username, email, name, lastName, [this.roles], password).subscribe({
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
