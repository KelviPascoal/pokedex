import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  @Input()
  public pokemon: any;

  //criar a saida do evento, o emissor, com qualquer nome
  // lembrar de colocar esse mesmo nome onde estiver chamando este componente ex: (nomeDoEvento)="acao($event)"
  @Output()
  eventDelete = new EventEmitter();

  ngOnInit(): void {
  }

  onDelete() {
    //aqui esta disparando o evento, passando o id, mas poderia passar qualquer valor, ate um objeto ou lista
    this.eventDelete.emit(this.pokemon.id)
  }

}
