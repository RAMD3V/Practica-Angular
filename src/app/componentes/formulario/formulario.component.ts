import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
formulario=this.formBuilder.group({
  nombre:'',
  apellido:'',
  email:'',
  telefono:'',
  mensaje:''
});
estado=false;
nombre="";
apellido="";
correo="";
telefono="";
mensaje="";


  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }
guardarDatos(){
  this.estado=true;
  this.nombre = this.formulario.get('nombre')?.value
  this.apellido = this.formulario.get('apellido')?.value
  this.correo = this.formulario.get('email')?.value
  this.telefono = this.formulario.get('telefono')?.value
  this.mensaje = this.formulario.get('mensaje')?.value
  this.formulario.reset();

}
}
