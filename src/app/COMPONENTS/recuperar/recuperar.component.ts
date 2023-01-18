import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForgotPwdService } from 'src/app/services/forgot-pwd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {
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
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl([], Validators.required)
  });


  constructor(private authService: AuthService, private routerF: Router, private forgotService: ForgotPwdService, private router: ActivatedRoute, private matDialog: MatDialog) {
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
    this.forgotService.forgot(email).subscribe((response) => {
      const alertReference = this.matDialog.open(AlertComponent, {data: response})
      alertReference.afterClosed().subscribe(() => {
        this.routerF.navigateByUrl('/home')
      });
    },
    err => {
      console.log(err)
      const alertReference = this.matDialog.open(AlertComponent, {data: err})
    })
  }
}
