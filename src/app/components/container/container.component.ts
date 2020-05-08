import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerRelationshipService } from 'src/app/services/server-relationship.service';
import { GetPokemon } from 'src/app/interfaces/getPokemonInterface';
import { PokemonDetailsService } from 'src/app/services/pokemon-details.service';
import { LoaderCheckerService } from 'src/app/services/loader-checker.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
  public pokemonArr = [];
  private subscriber: any;
  public select: string;

  constructor( private serverService: ServerRelationshipService,
               public detailsService: PokemonDetailsService,
               public loaderCheckerService: LoaderCheckerService) { }

  ngOnInit(): void {
    this.getList();
    this.select = 'any';
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  public getList(): void {
    this.loaderCheckerService.loaderChecker = true;
    this.loaderCheckerService.pokemonLoadingCounter = 0;
    this.subscriber = this.serverService.getPokemonList()
    .subscribe(
      (data: GetPokemon) => {
      this.serverService.nextPageUrl = data.next;
      this.pokemonArr.push(...data.results);
      this.loaderCheckerService.maksPokemonCounter = data.results.length;
    },
    (error) => {
      console.log(error);
      });
  }
  public getNextList(): void {
    this.detailsService.pokemonDetails.display = 'none';
    this.detailsService.emptyArrStatus = false;
    this.select = 'any';
    this.subscriber.unsubscribe();
    this.serverService.url = this.serverService.nextPageUrl;
    this.getList();
  }
}
