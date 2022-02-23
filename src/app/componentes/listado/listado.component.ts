import { Component, OnInit } from '@angular/core';
import { ModeloComentarios } from 'src/app/interface/modelo';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  servlistaComent:ModeloComentarios[]=[];
  primero:ModeloComentarios={} as ModeloComentarios;
  ultimo:ModeloComentarios={} as ModeloComentarios;
  mostrar="";

   constructor(private serviciolistacoment:ServiceService) { }

  ngOnInit(): void {
    this.servlistaComent = this.serviciolistacoment.getAll();
    this.primero=this.serviciolistacoment.primero();
    this.ultimo=this.serviciolistacoment.ulktimo();
    console.log("Datos");
    console.log(this.primero);
    console.log(this.servlistaComent);
      
  }
 


}