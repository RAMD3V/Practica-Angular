import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModeloTips } from 'src/app/interface/modelo';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formulario=this.formulariotips.group({
    nombre:"",
    correo:"",
    videojuego:"",
    tip:""
  })
estado:boolean=false;
  tips:ModeloTips[]=[];
  constructor(private formulariotips:FormBuilder) { }

  guardarTip(){
    const nuevoTip : ModeloTips={
      nombre:this.formulario.get("nombre")?.value,
      correo:this.formulario.get("correo")?.value,
      videojuego:this.formulario.get("videojuego")?.value,
      tip:this.formulario.get("tip")?.value,

      
    }
   this.tips.push(nuevoTip);
   this.estado=true;
   this.formulario.reset();
  }
  ngOnInit(): void {
  }

}
