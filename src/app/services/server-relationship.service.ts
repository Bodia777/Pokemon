import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPokemon } from '../interfaces/getPokemonInterface';

@Injectable({
  providedIn: 'root'
})
export class ServerRelationshipService {
  public url = 'https://pokeapi.co/api/v2/pokemon/?limit=12';
  public nextPageUrl: string;

  constructor(private http: HttpClient) { }

  public getPokemonList(): Observable<GetPokemon> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.get<GetPokemon>(this.url, {headers});
  }
  public getPokemon(id): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
    return this.http.get(url, {headers});
  }

}
