import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../componentes/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { GustosComponent } from '../componentes/gustos/gustos.component';
import { VideoComponent } from '../componentes/video/video.component';
import { FormularioComponent } from '../componentes/formulario/formulario.component';
import { ContactoComponent } from '../componentes/contacto/contacto.component';
import { ComentariosComponent } from '../componentes/comentarios/comentarios.component';


const routes : Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'gustos',
    component:GustosComponent
  },
  {
    path:'videojuegos',
    component:VideoComponent
  },
  {
    path:'formulario',
    component:FormularioComponent
  },
  {
    path:'contact',
    component:ContactoComponent
  },
  {
    path:'comentarios',
    component:ComentariosComponent
  }
  

]
@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
  
})
export class AppRoutingModule { }
