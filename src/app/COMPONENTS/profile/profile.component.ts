import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private profileService: ProfileService
  ) {}

  profile: any;

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.profile = data
    })
  }
}
