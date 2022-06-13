import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/herores.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {
    this.activatedRoute.params.subscribe(params => {
        this.heroe = this._heroesService.getHeroeById(params['id']);
      }
    )
  }

  volver(){
    this.router.navigate(['/heroes']);
  }

}
