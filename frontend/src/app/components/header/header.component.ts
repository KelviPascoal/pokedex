import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('pokemons');
  }

  goToForm() {
    this.router.navigateByUrl('pokemons/capiturar');
  }
  goToGlobal() {
    this.router.navigateByUrl('pokemons/global');
  }
}
