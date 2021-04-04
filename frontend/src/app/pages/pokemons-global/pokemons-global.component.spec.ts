import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsGlobalComponent } from './pokemons-global.component';

describe('PokemonsGlobalComponent', () => {
  let component: PokemonsGlobalComponent;
  let fixture: ComponentFixture<PokemonsGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
