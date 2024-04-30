import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-oportunidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-oportunidades.component.html',
  styleUrl: './gestion-oportunidades.component.css',
})


export class GestionOportunidadesComponent implements OnInit {
  oportunidades: any[] = []; // Aquí se almacenarán los datos de las oportunidades

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar los datos de las oportunidades desde el servicio
    this.oportunidades = [
      { nombre: 'Oportunidad 1', estado: 'En progreso' },
      { nombre: 'Oportunidad 2', estado: 'Cerrada' },
      // Puedes agregar más oportunidades aquí o cargarlas desde un servicio
    ];
  }
}
