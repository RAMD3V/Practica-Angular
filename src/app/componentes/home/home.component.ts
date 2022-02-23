import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coment:any[]=[];
  constructor(private serviciolistacoment:ServiceService) { }

  ngOnInit(): void {
    this.comentariosServ();
    
  }

   async comentariosServ(){
    
      this.coment = await Promise.all(this.serviciolistacoment.getAll());
    
    console.log("User EN HOME");
    console.log(this.coment);
  }

}