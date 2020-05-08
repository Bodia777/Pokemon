import { Injectable } from '@angular/core';
import { PokemonDetails } from '../interfaces/getPokemonInterface';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsService {
  public emptyArrStatus = false;
  public pokemonDetails: PokemonDetails = {
  display: 'none',
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  displayDetailsName: 'none',
  displayDetailsId: 'none',
  displayDetailsType: 'none',
  attack: 'none',
  defense: 'none',
  hp: 'none',
  spAttack: 'none',
  spDefense: 'none',
  speed: 'none',
  weight: 'none',
  totalMoves: 'none'
};

  constructor() { }


  public showDisplay(): void {
  this.pokemonDetails.display = 'block';
}
}
