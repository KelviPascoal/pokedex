import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPokemonComponent } from './previous-pokemon.component';

describe('PreviousPokemonComponent', () => {
  let component: PreviousPokemonComponent;
  let fixture: ComponentFixture<PreviousPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
