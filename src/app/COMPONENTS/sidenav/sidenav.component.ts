import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface RouterLinks {
  link: string;
  name: string,
  icon: string;
}

@Component({
  selector: 'side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Input() isExpanded!: boolean;
  @Output() toggleMenu = new EventEmitter();




  public routeLinks: RouterLinks[] = [
    { link: "about", name: "About", icon: "dashboard" },
    { link: "locations", name: "Locations", icon: "account_balance" },
  ];
}


