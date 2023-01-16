import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from './services/auth.service';
import { SidebarService } from './COMPONENTS/sidebar/sidebar.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  listL=false;
  createUser=false;
  listUser=false;
  loading$ = this.loader.loading$;

  constructor(private sidebarservice: SidebarService, private tokenStorageService: TokenStorageService, private auth: AuthService, public loader: LoadingService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.createUser = this.roles.includes('ROLE_ADMIN');
      this.listL = this.roles.includes('ROLE_ADMIN');
      this.listUser = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  public isExpanded = false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }



  logout(): void {
    this.tokenStorageService.signOut();
    this.auth.logout().subscribe({
      error: err => {
        console.log(err)
      }
    });
    window.location.reload();
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
  }
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

}
