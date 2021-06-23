import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HomeComponent } from "./components/home/home/home.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscaheroesComponent } from "./components/buscaheroes/buscaheroes.component";

const Router: Routes = [
    { path: "home", component: HomeComponent },
    { path: "heroes", component: HeroesComponent },
    { path: "about", component: AboutComponent },
    { path: "heroe/:id", component: HeroeComponent },
    { path: "buscar/:termino", component: BuscaheroesComponent },
    { path: "**", pathMatch: "full", redirectTo: "home" }
]

export const router = RouterModule.forRoot(Router);