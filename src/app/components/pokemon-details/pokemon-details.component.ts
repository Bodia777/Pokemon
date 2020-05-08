import { Component, OnInit, DoCheck, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PokemonDetails } from 'src/app/interfaces/getPokemonInterface';
import { PokemonDetailsService } from 'src/app/services/pokemon-details.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, DoCheck {
  @ViewChild('pokemonDetailsWrapper', {static: true}) item: ElementRef;
  @ViewChild('pokemonImg', {static: true}) itemImg: ElementRef;
  public pokemonDetails: PokemonDetails;


  constructor(public detailsService: PokemonDetailsService, private renderer: Renderer2) {}
  ngOnInit(): void {}

  ngDoCheck(): void {
    this.renderer.setStyle(this.item.nativeElement, 'display', this.detailsService.pokemonDetails.display );
    this.renderer.setAttribute(this.itemImg.nativeElement, 'src', this.detailsService.pokemonDetails.img );
  }
}
