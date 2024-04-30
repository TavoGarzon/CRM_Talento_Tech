import { Routes } from '@angular/router';
import { PATH } from './core/enum/path.enum';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GestionClientesComponent } from './pages/gestion-clientes/gestion-clientes.component';
import { GestionOportunidadesComponent } from './pages/gestion-oportunidades/gestion-oportunidades.component';
import { HistorialInteraccionesComponent } from './pages/historial-interacciones/historial-interacciones.component';

export const routes: Routes = [

  {
    path: PATH.HOME,
    title: 'Home',
    children: [
      //Path por defecto del path padre
      {
        path: PATH.HOME,
        title: 'Home',
        component: InicioComponent,
      },
      {
        path: PATH.CLIENTES,
        title: 'Clientes',
        component: GestionClientesComponent,
      },
      {
        path: PATH.OPORTUNIDADES,
        title: 'Oportunidades',
        component: GestionOportunidadesComponent,
      },
      {
        path: PATH.INTERACCION,
        title: 'Interacciones',
        component: HistorialInteraccionesComponent,
      },
]
}
]
