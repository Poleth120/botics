import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AlertComponent } from '../alert/alert.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogPComponent } from './dialog/dialogP.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private profileService: ProfileService, private matDialog: MatDialog
  ) {}
  profileD: any;
  profile: any;
  profileInfo: any;
  filesss!: File;

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      this.profile = data
      this.profileInfo = {firstName: data.firstName, lastName: data.lastName, extension: data.extension}
      console.log(data)
    },
    err => {
      const alertReference = this.matDialog.open(AlertComponent, {data: err})
    })
  }

  updateInfoProfile() {
    console.log(this.profileInfo)
    this.profileService.updateProfileInfo(this.profileInfo).subscribe((response) => {
      const alertReference = this.matDialog.open(AlertComponent, {data: response})
      alertReference.afterClosed().subscribe(() => {
        this.ngOnInit();
      })
    },
    err => {
      console.log(err)
      const alertReference = this.matDialog.open(AlertComponent, {data: err})
    })
  }

  updateAvatarProfile() {
    const dialogReference = this.matDialog.open(DialogPComponent, {data: this.filesss});
    dialogReference.afterClosed().subscribe((result) => {
      if (result === undefined) {
        this.ngOnInit()
      } else {
        const formData = new FormData()
        formData.append('avatar', result)
        this.profileService.updateAvatar(formData).subscribe((response) => {
          const alertReference = this.matDialog.open(AlertComponent, {data: response})
          alertReference.afterClosed().subscribe(() => {
            window.location.reload();
          })
        },
        err => {
          console.log(err)
          const alertReference = this.matDialog.open(AlertComponent, {data: err})
        })
      }
    })
  }
}
