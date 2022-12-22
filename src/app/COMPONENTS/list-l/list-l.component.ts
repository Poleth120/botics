import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

interface Lab{
  id: number;
  name: string;
  state: boolean;
  image: string;
}

@Component({
  selector: 'app-list-l',
  templateUrl: './list-l.component.html',
  styleUrls: ['./list-l.component.css']
})
export class ListLComponent implements OnInit{
  constructor(private adminService: AdminService) {

  }

  labs!: [Lab];

  ngOnInit(): void {
    this.adminService.labIndex().subscribe((data) => {
      this.labs = data
    });
  }




  getLabs(): void {

  }
}
