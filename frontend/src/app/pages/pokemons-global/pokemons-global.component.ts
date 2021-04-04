import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-global',
  templateUrl: './pokemons-global.component.html',
  styleUrls: ['./pokemons-global.component.scss']
})

export class PokemonsGlobalComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public types: any[];
  public pokemons: any[] = [];
  public buttonFunction: any;

  ngOnInit(): void {
    this.findAllPokemons();
    console.log(this.pokemons);
    this.loadTypesButtons()

  }

  async loadTypesButtons() {
    const typeList = await this.http.get<any>('https://pokeapi.co/api/v2/type').toPromise()
    this.types = typeList.results;
  }

  goToFilter(type: any) {
    const id = type.name
    this.router.navigateByUrl('pokemons/filter/' + id);
  }

  async findAllPokemons() {
    const pokemonsObj = await this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0').toPromise()
    this.pokemons = pokemonsObj.results

  }

}


