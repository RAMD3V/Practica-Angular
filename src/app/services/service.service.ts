import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModeloComentarios } from '../interface/modelo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  servlistaComent:ModeloComentarios[]=[];

  constructor(private http:HttpClient ) { 
 }
 getAll(){
   return this.servlistaComent;
 }
 addComent(lista:ModeloComentarios){
   this.servlistaComent.push(lista);
   console.log(this.servlistaComent);
 }
 
 primero(){
  return this.servlistaComent[0];
}
ulktimo(){
  return this.servlistaComent[-1];
}
}