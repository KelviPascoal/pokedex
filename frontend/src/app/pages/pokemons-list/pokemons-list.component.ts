import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  public pokemons: any[] = [];

  ngOnInit(): void {
    this.getPokemons();
  }

  async getPokemons() {
    this.pokemons = await this.http.get<any[]>('http://localhost:7777/pokemons').toPromise();
  }

  async deletePokemon(id: string) {
    await this.http.delete('http://localhost:7777/pokemons/' + id).toPromise();
    const indexDelete = this.pokemons.findIndex(p => p.id == id);
    this.pokemons.splice(indexDelete, 1)
  }

  putPokemons(id: string) {
    this.router.navigateByUrl('pokemons/editar/' + id);

  }
}
