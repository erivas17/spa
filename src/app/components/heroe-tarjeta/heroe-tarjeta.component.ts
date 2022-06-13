import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  //Clase 68
  @Input() heroe : any = {};
  @Input() index : number;

  //Clase 69
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  //Clase 68 y 69
  verHeroe(){
    //clase 68
    this.router.navigate(['/heroe', this.index]);

    //clase 69
    //this.heroeSeleccionado.emit(this.index);
  }
}
