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
  }
}
