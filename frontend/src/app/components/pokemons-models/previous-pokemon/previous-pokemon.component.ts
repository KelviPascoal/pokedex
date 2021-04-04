import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-pokemon',
  templateUrl: './previous-pokemon.component.html',
  styleUrls: ['./previous-pokemon.component.scss']
})
export class PreviousPokemonComponent implements OnInit {

  constructor() { }

  @Input()
  public prePokemon: any;

  public defaultImage = "https://media1.tenor.com/images/9e919ccf601ffec0724b6e059140e3e4/tenor.gif"

  ngOnInit(): void {
  }
}
