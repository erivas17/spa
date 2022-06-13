import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/herores.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

        this.activatedRoute.params.subscribe(params => {
            this.termino = params['termino'];
            if(this.termino == null){
              this.heroes = this._heroesService.getHeroes();
            }
            else{
              this.heroes = this._heroesService.buscarHeroes(this.termino);
            }
          }
        )
  }

  ngOnInit(): void {

  }

  verHeroe(index: number){
    this.router.navigate(['/heroe', index]);
  }
}
