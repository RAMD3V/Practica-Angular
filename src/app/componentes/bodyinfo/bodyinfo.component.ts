import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-bodyinfo',
  templateUrl: './bodyinfo.component.html',
  styleUrls: ['./bodyinfo.component.css']
})
export class BodyinfoComponent implements OnInit {

  jue=prompt("¿Cual es tu juego favorito actualmente?");

  constructor() { }

  ngOnInit(): void {
  }

}
