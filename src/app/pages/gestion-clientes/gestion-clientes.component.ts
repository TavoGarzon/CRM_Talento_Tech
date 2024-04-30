import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-clientes.component.html',
  styleUrl: './gestion-clientes.component.css',
})
export class GestionClientesComponent implements OnInit {
  clientes: any[] = []; // Aquí se almacenarán los datos de los clientes

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar los datos de los clientes desde el servicio
    this.clientes = [
      {
        nombre: 'Cliente 1',
        direccion: 'Calle 123',
        email: 'cliente1@example.com',
        telefono: '123456789',
      },
      {
        nombre: 'Cliente 2',
        direccion: 'Avenida 456',
        email: 'cliente2@example.com',
        telefono: '987654321',
      },
      // Puedes agregar más clientes aquí o cargarlos desde un servicio
    ];
  }
}
