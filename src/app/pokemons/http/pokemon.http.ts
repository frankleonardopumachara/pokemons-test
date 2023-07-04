import { inject, Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { IPage, Pagination, PokemonDetail, PokemonItem } from '../domain/symbols'
import { Observable } from 'rxjs'

@Injectable({providedIn: 'root'})
export class PokemonHttp {
  private http = inject(HttpClient)

  private url = 'https://pokeapi.co/api/v2/pokemon'

  public getPokemonPage({offset, limit}: Pagination): Observable<IPage<PokemonItem>> {
    let params = new HttpParams()
    params = params.set('offset', offset)
    params = params.set('limit', limit)

    return this.http
      .get<IPage<PokemonItem>>(this.url, {
        params
      })
  }

  public getPokemonDetail(name: string): Observable<PokemonDetail> {
    return this.http
      .get<PokemonDetail>(`${ this.url }/${ name }`)
  }
}
