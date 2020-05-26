import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]=[
    {
    nombre:'Jose',
    especialidad:'HTML',
    descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa',
  },
  {
    nombre:'Maria',
    especialidad:'CSS',
    descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa',
  },

  ]

  constructor() { 
    console.log('funcionando servicio')
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerUno(i){
    return this.equipo[i];
  }
}
