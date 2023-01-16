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
  profileInfo: any;
  filesss!: File;

  onChange(event: any) {
    this.filesss = event.target.files[0];
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.profile = data
      this.profileInfo = {firstName: data.firstName, lastName: data.lastName, extension: data.extension}
      console.log(data)
    })
  }

  updateInfoProfile() {
    console.log(this.profileInfo)
    this.profileService.updateProfileInfo(this.profileInfo).subscribe(() => {
      this.ngOnInit()
    })
  }

  updateAvatarProfile() {
    console.log(this.filesss)
    this.profileService.updateAvatar(this.filesss).subscribe(() => {
      this.ngOnInit()
    })
    /*
    this.filesss.arrayBuffer().then((binary) => {
      this.profileService.updateAvatar(binary).subscribe(() => {
        this.ngOnInit()
      })
    })
    */

  }
}
