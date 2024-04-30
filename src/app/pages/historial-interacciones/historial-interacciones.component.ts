import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-interacciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-interacciones.component.html',
  styleUrl: './historial-interacciones.component.css',
})
export class HistorialInteraccionesComponent implements OnInit {

  interacciones: any[] = []; // Aquí se almacenarán los datos de las interacciones

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar los datos de las interacciones desde el servicio
    this.interacciones = [
      { tipo: 'Llamada', descripcion: 'Llamada telefónica con el cliente' },
      { tipo: 'Correo electrónico', descripcion: 'Correo enviado al cliente' },
      // Puedes agregar más interacciones aquí o cargarlas desde un servicio
    ];
  }
}
