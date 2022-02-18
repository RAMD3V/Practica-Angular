import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  fechas:Date=new Date;
  fecha= this.fechas.getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
