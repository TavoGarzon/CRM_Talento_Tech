import { PATH } from '../core/enum/path.enum';
import { MenuInfoInterface } from '../core/interface/menu_info_interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.HOME,
    title: 'Home',
    icon: 'fa-solid fa-igloo',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.CLIENTES,
    title: 'Gestion Con Clientes',
    icon: 'fa-solid fa-panorama',
    classCss: '',
    subMenu: [],
  },

  {
    path: PATH.OPORTUNIDADES,
    title: 'Gestion de Oportunidades',
    icon: 'fa-solid fa-newspaper',
    classCss: '',
    subMenu: [],
  },
  {
    path: PATH.INTERACCION,
    title: 'Contacto e Historial de Interacciones',
    icon: 'fa-solid fa-hand-holding-hand',
    classCss: '',
    subMenu: [],
  },
];
