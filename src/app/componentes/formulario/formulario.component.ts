import { formatNumber } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  nombre:string = "";
  apellido:string = "";
  correo:string= "";
  numero:number= 0;
  mensaje:string = "";
  estado:boolean=false;
  constructor() { 
    
  }

  mostrar(){
    this.estado=true;
  }

  ngOnInit(): void {
  }
}
