import { inject, Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { IPage, IPokemon, Pagination } from '../domain/symbols'
import { Observable } from 'rxjs'

@Injectable({providedIn: 'root'})
export class PokemonHttp {
  private http = inject(HttpClient)

  private url = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20'

  public getPokemonPage({offset, limit}: Pagination): Observable<IPage<IPokemon>> {
    let params = new HttpParams()
    params = params.set('offset', offset)
    params = params.set('limit', limit)

    return this.http
      .get<IPage<IPokemon>>(this.url, {
        params
      })
  }
}
