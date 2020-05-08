import { Component, OnInit, Input, ViewChild, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { PokemonPreview } from 'src/app/interfaces/getPokemonInterface';
import { ServerRelationshipService } from 'src/app/services/server-relationship.service';
import { PokemonDetailsService } from 'src/app/services/pokemon-details.service';
import { LoaderCheckerService } from 'src/app/services/loader-checker.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {
  @Input() pokemonItem: PokemonPreview;
  @ViewChild('itemImg', {static: false}) itemImg: ElementRef;
  public pokemonId: string;
  public pokemonDetails: any[any];
  public types = [];
  private subscriber = null;

  constructor(private serverService: ServerRelationshipService,
              private renderer: Renderer2,
              private detailsService: PokemonDetailsService,
              private loaderCheckerService: LoaderCheckerService) { }

ngOnInit(): void {
this.pokemonItem.types = 'none';
const slashArr = this.pokemonItem.url.split('/');
this.pokemonId = slashArr[(slashArr.length - 2)];
this.subscriber = this.serverService.getPokemon(this.pokemonId)
.subscribe(
(pokemonDetails) => {
this.pokemonDetails = pokemonDetails;
for (const pokemonType of pokemonDetails.types) {
this.types.push(pokemonType.type.name);
}
this.pokemonItem.types = this.types;
const imageUrl = pokemonDetails.sprites.front_default;
this.renderer.setAttribute(this.itemImg.nativeElement, 'src', `${imageUrl}` );
this.loaderCheckerService.getPokemonLoadingCheck();
},
(error) => {
  console.log(error);
  this.loaderCheckerService.getPokemonLoadingCheck();
});
}
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  public setDetails(): void {
    this.detailsService.showDisplay();
    this.detailsService.pokemonDetails.img = this.pokemonDetails.sprites.front_default;
    this.detailsService.pokemonDetails.displayDetailsName = this.pokemonItem.name;
    this.detailsService.pokemonDetails.displayDetailsId = this.pokemonId;
    this.detailsService.pokemonDetails.displayDetailsType = this.types;
    this.detailsService.pokemonDetails.attack = this.pokemonDetails.stats[4].base_stat;
    this.detailsService.pokemonDetails.defense = this.pokemonDetails.stats[3].base_stat;
    this.detailsService.pokemonDetails.hp = this.pokemonDetails.stats[5].base_stat;
    this.detailsService.pokemonDetails.spAttack = this.pokemonDetails.stats[2].base_stat;
    this.detailsService.pokemonDetails.spDefense = this.pokemonDetails.stats[1].base_stat;
    this.detailsService.pokemonDetails.speed = this.pokemonDetails.stats[0].base_stat;
    this.detailsService.pokemonDetails.weight = this.pokemonDetails.weight;
    this.detailsService.pokemonDetails.totalMoves = this.pokemonDetails.moves.length;
  }
}
