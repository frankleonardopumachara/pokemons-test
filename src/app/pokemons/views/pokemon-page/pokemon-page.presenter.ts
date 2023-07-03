import { Injectable } from '@angular/core'

@Injectable()
export class PokemonPagePresenter {

  // private pokemonHttp = inject(PokemonHttp)
  //
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
}
