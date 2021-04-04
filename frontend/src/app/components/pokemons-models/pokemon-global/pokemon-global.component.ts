import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-global',
  templateUrl: './pokemon-global.component.html',
  styleUrls: ['./pokemon-global.component.scss']
})
export class PokemonGlobalComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }
  @Input()
  public pokemon: any;

  ngOnInit(): void {
    this.loadPokemons()
  }

  async loadPokemons() {
    const urlSplit: any[] = this.pokemon.url.split("/");
    this.pokemon.image = "https://pokeres.bastionbot.org/images/pokemon/" + urlSplit[(urlSplit.length - 2)] + ".png";
  }
}
