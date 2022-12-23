import { Component } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder,
    private token: TokenStorageService,
    private computerService: ComputerService
  ) {}

  model: any = {};
  onSubmit() {
    console.log(this.model);
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      dob: [null, [Validators.required]],
      address: [null],
      country: [null],
      gender: [null]
    });
  }


  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }
}
