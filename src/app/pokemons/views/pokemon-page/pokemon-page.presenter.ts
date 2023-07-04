import { inject, Injectable } from '@angular/core'
import { PokemonHttp } from '../../http/pokemon.http'
import { PokemonDetail } from '../../domain/symbols'
import { BehaviorSubject, filter, switchMap } from 'rxjs'

@Injectable()
export class PokemonPagePresenter {

  private pokemonHttp = inject(PokemonHttp)

  private selectedPokemonName = new BehaviorSubject<string | null>(null)
  public selectedPokemon$ = this.selectedPokemonName
    .pipe(
      filter((name) => name !== null),
      switchMap((name) => this.pokemonHttp.getPokemonDetail(name))
    )
  // private suggestions = new BehaviorSubject<string[]>([])
  // public suggestions$ = this.suggestions.asObservable()
  //
  // private pagination = new BehaviorSubject<Pagination>({
  //   limit: 10,
  //   offset: 0
  // })
  //
  // public pagination$ = this.pagination.asObservable()
  //
  // public pokemonsPage$: Observable<Page<PokemonRow>> = this.pagination$
  //   .pipe(
  //     switchMap((pagination) => {
  //       return this.getPokemonPage(pagination)
  //     })
  //   )
  //
  // private getPokemonPage(pagination: Pagination): Observable<Page<PokemonRow>> {
  //   return this.pokemonHttp.getPokemonPage(pagination).pipe(
  //     map((page) => {
  //       const results = page.results.map(pokemon => new PokemonRow(pokemon))
  //
  //       const pokemonPage = new Page<PokemonRow>({
  //         results: results,
  //         count: page.count,
  //         next: page.next,
  //         previous: page.previous
  //       })
  //
  //       return pokemonPage
  //     }),
  //     catchError((err) => {
  //       console.log(err)
  //       const error = new Error('Algo paso!')
  //       return throwError(() => error)
  //     })
  //   )
  // }
  //
  // public filterPokemos(query: string): void {
  //   const suggestions = this.suggestions
  //     .value
  //     .filter((name) => name.includes(query))
  //
  //   this.suggestions.next([])
  // }

  getPokemonDetail(name: string) {
    this.pokemonHttp.getPokemonDetail(name)
      .pipe(
        sw
      )
  }
}
