import { Pipe, PipeTransform } from '@angular/core';
import { PokemonPreview } from '../interfaces/getPokemonInterface';
import { PokemonDetailsService } from '../services/pokemon-details.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 constructor(private detailsService: PokemonDetailsService) { }

  transform(pokemonArr: [PokemonPreview] | any, searchInputWord: string, ): Array<PokemonPreview> {
    if (searchInputWord === 'any') {
      this.detailsService.emptyArrStatus = false;
      return pokemonArr;
    } else {
      this.detailsService.pokemonDetails.display = 'none';
      const newArr = pokemonArr.filter((element) => element.types.includes(`${searchInputWord}`));
      newArr.length ? this.detailsService.emptyArrStatus = false : this.detailsService.emptyArrStatus = true;
      return newArr;
    }
  }
}
