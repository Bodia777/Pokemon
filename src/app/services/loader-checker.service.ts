import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderCheckerService {
public  pokemonLoadingCounter = 0;
public loaderChecker: boolean;
public maksPokemonCounter: number;

  constructor() { }
public getPokemonLoadingCheck() {
  this.pokemonLoadingCounter++;
  if (this.pokemonLoadingCounter >= this.maksPokemonCounter) {
    this.loaderChecker = false;
  }
}
}
