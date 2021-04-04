import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsFilterComponent } from './pokemons-filter.component';

describe('PokemonsFilterComponent', () => {
  let component: PokemonsFilterComponent;
  let fixture: ComponentFixture<PokemonsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
