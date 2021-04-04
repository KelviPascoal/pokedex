import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-filter',
  templateUrl: './pokemons-filter.component.html',
  styleUrls: ['./pokemons-filter.component.scss']
})

export class PokemonsFilterComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public types: any[];
  public pokemons: any[];
  public buttonFunction: any;

  ngOnInit(): void {
    this.loadPokemon()

  }
  loadPokemon() {
    this.findPokemonsFilter();
    console.log(this.pokemons);
    this.loadTypesButtons()
  }

  async loadTypesButtons() {
    const typeList = await this.http.get<any>('https://pokeapi.co/api/v2/type').toPromise()
    this.types = typeList.results;
  }

  async loadType(type: any) {
    console.log(type.name);

    const filterPokemonsList: any = await this.http.get('https://pokeapi.co/api/v2/type/' + type.name).toPromise()
    const urlSplit = type.url.split("/")
    const number = urlSplit[urlSplit.length - 2]

    this.pokemons = filterPokemonsList.pokemon
    console.log(this.pokemons);
  }

  async findPokemonsFilter() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")

    const pokemonsObj = await this.http.get<any>('https://pokeapi.co/api/v2/type/' + id).toPromise()
    this.pokemons = pokemonsObj.pokemon
    console.log(this.pokemons);


  }

  goToFilter(type: any) {
    const id = type.name;
    this.router.navigateByUrl('pokemons/filter/' + id).then(() => {
      this.loadPokemon()
    });

  }




}


