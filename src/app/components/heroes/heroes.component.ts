import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroeService:HeroesService, 
              private router:Router) {  
  }

  ngOnInit(): void {
        this.heroes = this._heroeService.getHeroesData(); 
  }

  verHeroe(indice:number){
    this.router.navigate(["/heroe", indice]);
  }
}
