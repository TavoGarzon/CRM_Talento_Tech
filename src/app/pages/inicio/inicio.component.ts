import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  mostrarTitulo: boolean = true;
  constructor(private router: Router) {}

  cambioRuta() {
    this.router.navigateByUrl('/personas');
  }
  abriModal() {

    Swal.fire({
      title: 'Como estas!',
      text: 'Gracias por ingresar!',
      icon: 'success',
    });
  }
}


