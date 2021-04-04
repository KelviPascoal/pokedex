// import { PreviousPokemonComponent } from './../../components/previous-pokemon/previous-pokemon.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pokemons-form',
  templateUrl: './pokemons-form.component.html',
  styleUrls: ['./pokemons-form.component.scss']
})
export class PokemonsFormComponent implements OnInit {


  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  search: string

  public pokemon: any;
  public previusPokemon: any;
  public nextPokemon: any;

  ngOnInit(): void {
  }

  goToList() {
    this.router.navigateByUrl('pokemons');
  }

  async searchPokemon() {

    const searchPokemon: any = await this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.search).toPromise()
    this.pokemon = {
      name: searchPokemon.name,
      type: searchPokemon.types[0].type.name,
      numberPokemon: searchPokemon.id,
      image: "https://pokeres.bastionbot.org/images/pokemon/" + searchPokemon.id + ".png",

    }
    this.setPokemonsSides(searchPokemon.id)
  }

  async setPokemonsSides(number: number) {
    const nextInfo: any = await this.http.get('https://pokeapi.co/api/v2/pokemon/' + (number + 1)).toPromise()
    const pokemonNext: any = {
      image: "https://pokeres.bastionbot.org/images/pokemon/" + (number + 1) + ".png",
      number: number,
      name: nextInfo.name,
      type: nextInfo.types[0].type.name
    }
    const preInfo: any = await this.http.get('https://pokeapi.co/api/v2/pokemon/' + (number - 1)).toPromise()
    const pokemonPreviuous: any = {
      image: "https://pokeres.bastionbot.org/images/pokemon/" + (number - 1) + ".png",
      number: number,
      name: preInfo.name,
      type: preInfo.types[0].type.name
    }

    this.previusPokemon = pokemonPreviuous;
    this.nextPokemon = pokemonNext;

  }

  async save() {
    await this.http.post('http://localhost:7777/pokemons', this.pokemon).toPromise()
    this.goToList()
  }

  discart() {
    const defaultImage: any = {
      image: "assets/images/pokebola1.png"
    }
    this.pokemon = null;
    this.previusPokemon = defaultImage;
    this.nextPokemon = defaultImage;
  }

  async previous(number: number) {
    const previous = (number - 1)

    const prePokemon: any = await this.http.get('https://pokeapi.co/api/v2/pokemon/' + previous).toPromise()
    this.pokemon = {
      name: prePokemon.name,
      type: prePokemon.types[0].type.name,
      numberPokemon: prePokemon.id,
      image: "https://pokeres.bastionbot.org/images/pokemon/" + prePokemon.id + ".png",

    }
    this.setPokemonsSides(prePokemon.id)

  }
  async next(number: number) {
    const next = (number + 1)

    const nextPokemon: any = await this.http.get('https://pokeapi.co/api/v2/pokemon/' + next).toPromise()
    this.pokemon = {
      name: nextPokemon.name,
      type: nextPokemon.types[0].type.name,
      numberPokemon: nextPokemon.id,
      image: "https://pokeres.bastionbot.org/images/pokemon/" + nextPokemon.id + ".png",

    }
    this.setPokemonsSides(nextPokemon.id)

  }
}
