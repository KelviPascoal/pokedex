import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSidesComponent } from './pokemon-sides.component';

describe('PokemonSidesComponent', () => {
  let component: PokemonSidesComponent;
  let fixture: ComponentFixture<PokemonSidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
