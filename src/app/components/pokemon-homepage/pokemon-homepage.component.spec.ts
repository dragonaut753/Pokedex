import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomepageComponent } from './pokemon-homepage.component';

describe('PokemonHomepageComponent', () => {
  let component: PokemonHomepageComponent;
  let fixture: ComponentFixture<PokemonHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
