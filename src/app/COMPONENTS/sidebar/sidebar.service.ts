import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = true;
  _hasBackgroundImage = true;
  menusAdmin = [
    {
      title: 'Laboratorios',
      icon: 'fa fa-desktop',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Laboratorio SMD',
          route: 'laboratorios/lab-computadoras',
          param: { id: 1 }
        },
        {
          title: 'Laboratorio 14',
          route: 'laboratorios/lab-computadoras',
          param: { id: 2 }
        },
        {
          title: 'Laboratorio 15',
          route: 'laboratorios/lab-computadoras',
          param: { id: 3 }
        },
        {
          title: 'Laboratorio 16',
          route: 'laboratorios/lab-computadoras',
          param: { id: 4 }
        },
        {
          title: 'Laboratorio 22A',
          route: 'laboratorios/lab-computadoras',
          param: { id: 5 }
        },
        {
          title: 'Laboratorio 22B',
          route: 'laboratorios/lab-computadoras',
          param: { id: 6 }
        },
      ]
    },
    {
      title: 'Pasantes',
      icon: 'fa fa-users',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Listar',
          route: 'pasantes-listar'
        },
        {
          title: 'Resgistrar',
          route: 'crear-nuevo-usuario'
        }
      ]
    },
    {
      title: 'Administración',
      icon: 'fa fa-tasks',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Comentarios/sugerencias',
          route: 'admin-comentarios',
        },
        {
          title: 'Tickets de asistencia',
          route: 'admin-tickets'
        },
        {
          title: 'Reservas',
          route: 'admin-reserves'
        }
      ]
    },
    {
      title: 'Inventarios',
      icon: 'fa fa-cubes',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Computadoras',
          route: 'lab-computadoras'
        },
        {
          title: 'Reporte',
        },
        {
          title: 'Historial',
          route: 'admin-history'
        }
      ]
    }
  ];
  menusPasante = [
    {
      title: 'Tickets',
      icon: 'fa fa-ticket',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Listar',
          route: 'pasante-tickets'
        }
      ]
    },
    {
      title: 'Reservas',
      icon: 'fa fa-calendar',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Listar',
          route: 'intern-reserves'
        }
      ]
    },
  ];

  menusProfesor = [
    {
      title: 'Comentarios y/o sugerencias',
      icon: 'fa fa-comments',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Listar - Enviar',
          route: 'profesor-comentarios'
        }
      ]
    },
    {
      title: 'Tickets',
      icon: 'fa fa-ticket',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Listar - Enviar',
          route: 'profesor-tickets'
        }
      ]
    },
    {
      title: 'Reservas',
      icon: 'fa fa-calendar',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Listar - Enviar',
          route: 'profesor-reservas'
        }
      ]
    },
  ];

  menusAdministrativo = [
    {
      title: 'Comentarios y/o sugerencias',
      icon: 'fa fa-comments',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Enviar mis comentarios ',
          route: 'administrativo-comentarios'
        },
        {
          title: 'Listar comentarios',
          route: 'administrativo-comentarios-res'
        }
      ]
    },
    {
      title: 'Tickets',
      icon: 'fa fa-ticket',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Enviar ticket de asistencia',
          route: 'administrativo-tickets'
        }
      ]
    }
  ];


  noMenus = [];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList(role: string) {
    switch(role) {
      case role = 'ROLE_ADMIN': {
        return this.menusAdmin;
      }
      case role = 'ROLE_PASANTE': {
        return this.menusPasante;
      }
      case role = 'ROLE_ADMINISTRATIVO': {
        return this.menusAdministrativo;
      }
      case role = 'ROLE_PROFESOR': {
        return this.menusProfesor;
      }
      default: {
        return this.noMenus;
      }
    }

  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
