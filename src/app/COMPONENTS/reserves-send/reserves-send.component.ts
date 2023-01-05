import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-reserves-send',
  templateUrl: './reserves-send.component.html',
  styleUrls: ['./reserves-send.component.scss']
})
export class ReservesSendComponent {
  constructor(private teacherService: TeacherService, private tokenService: TokenStorageService) {}

  idUser: any

  ngOnInit(): void {
    this.reserva = {labName: '', description: ''};
    this.idUser = this.tokenService.getUser().id
  }

  reserva!: any;

  sendReserve() {
    this.teacherService.saveReserve(this.idUser, this.reserva).subscribe(() => {
      this.ngOnInit()
    });
  }



}
