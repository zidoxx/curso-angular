import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscaheroes',
  templateUrl: './buscaheroes.component.html',
  styleUrls: ['./buscaheroes.component.css']
})
export class BuscaheroesComponent implements OnInit {

  heroe:Heroe[] = [];
  termino:any;
  validar:boolean = true;

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private router:Router) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.termino = param['termino'];
      this.heroe = this.heroesService.buscarHeroes(param['termino']);      
    })
  }

  verHeroe(index:number){
    this.router.navigate(["/heroe", index]);
  }
}
