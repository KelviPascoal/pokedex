import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-pokemon-sides',
  templateUrl: './pokemon-sides.component.html',
  styleUrls: ['./pokemon-sides.component.scss']
})
export class PokemonSidesComponent implements OnInit {

  constructor() { }

  @Input()
  public sidePokemon: any;
  @Input()
  public image = "assets/images/pokebola1.png";

  ngOnInit(): void {
    if (this.sidePokemon == null) {
      const pokemon = {
        image: this.image
      }
      this.sidePokemon = pokemon
    }
  }
}


