import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsListComponent } from './pages/pokemons-list/pokemons-list.component';
import { PokemonsFormComponent } from './pages/pokemons-form/pokemons-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviousPokemonComponent } from './components/pokemons-models/previous-pokemon/previous-pokemon.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonComponent } from './components/pokemons-models/pokemon/pokemon.component';
import { PokemonSidesComponent } from './components/pokemons-models/pokemon-sides/pokemon-sides.component';
import { PokemonsGlobalComponent } from './pages/pokemons-global/pokemons-global.component';
import { CategoriesButtonComponent } from './components/categories-button/categories-button.component';
import { PokemonGlobalComponent } from './components/pokemons-models/pokemon-global/pokemon-global.component';
import { PokemonsFilterComponent } from './pages/pokemons-filter/pokemons-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemonsFormComponent,
    PreviousPokemonComponent,
    HeaderComponent,
    PokemonComponent,
    PokemonSidesComponent,
    PokemonsGlobalComponent,
    CategoriesButtonComponent,
    PokemonGlobalComponent,
    PokemonsFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
