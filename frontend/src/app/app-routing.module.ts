import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsFilterComponent } from './pages/pokemons-filter/pokemons-filter.component';
import { PokemonsFormComponent } from './pages/pokemons-form/pokemons-form.component';
import { PokemonsGlobalComponent } from './pages/pokemons-global/pokemons-global.component';
import { PokemonsListComponent } from './pages/pokemons-list/pokemons-list.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsListComponent },
  { path: 'pokemons/capiturar', component: PokemonsFormComponent },
  { path: 'pokemons/editar/:id', component: PokemonsFormComponent },
  { path: 'pokemons/global', component: PokemonsGlobalComponent },
  { path: 'pokemons/filter/:id', component: PokemonsFilterComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
