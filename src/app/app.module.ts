import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyComponent } from './componentes/body/body.component';
import { BodyinfoComponent } from './componentes/bodyinfo/bodyinfo.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { GustosComponent } from './componentes/gustos/gustos.component';
import { VideoComponent } from './componentes/video/video.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BodyinfoComponent,
    FooterComponent,
    HomeComponent,
    GustosComponent,
    VideoComponent,
    FormularioComponent,
    ContactoComponent,
    ComentariosComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
