import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloComentarios } from 'src/app/interface/modelo';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  formulario=this.formularioCom.group({
    nick:"",
    correo:"",
    fecha:"",
    comentario:""
  })
date = new Date();
tiempo= Date.now();

estado:boolean=false;
  com:ModeloComentarios[]=[];
  constructor(private formularioCom:FormBuilder) { }

  guardarTip(){
    const nuevoCom : ModeloComentarios={
      nick:this.formulario.get("nick")?.value,
      correo:this.formulario.get("correo")?.value,
      fecha:this.formulario.get("fecha")?.value,
      comentario:this.formulario.get("comentario")?.value
    }
   this.com.push(nuevoCom);
   this.estado=true;
   this.formulario.reset();
  }
  ngOnInit(): void {
  }

}
