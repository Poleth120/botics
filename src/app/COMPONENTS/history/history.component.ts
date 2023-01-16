import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  constructor(private adminService: AdminService) {}

  longText = `Visualizar el historial de los equipos de los laboratorios. `;

  history: any

  ngOnInit(): void {
    this.adminService.historyIndex().subscribe((data) => {
      this.history = data
      console.log(this.history)
    })
  }

}
