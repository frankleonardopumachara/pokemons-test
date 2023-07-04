import {inject, Injectable} from '@angular/core'
import {PokemonHttp} from '../../http/pokemon.http'
import {BehaviorSubject, map, Observable, shareReplay, switchMap, tap} from 'rxjs'
import {isNotNull} from "../../utils";
import {IPage, Pagination, PokemonDetail, PokemonItem} from "../../domain/symbols";
import {PaginationConfig} from "../../../my-ui/table/domain/symbols";

@Injectable()
export class PokemonPagePresenter {

  private pokemonHttp = inject(PokemonHttp)

  private selectedPokemonName = new BehaviorSubject<string | null>(null)
  public selectedPokemon$: Observable<PokemonDetail> = this.selectedPokemonName
    .asObservable()
    .pipe(
      isNotNull(),
      switchMap((name) => this.pokemonHttp.getPokemonDetail(name))
    )

  private _pagination = new BehaviorSubject<Pagination>({
    offset: 1,
    limit: 10
  })
  public pagination$ = this._pagination.asObservable()

  public pokemonsPage$: Observable<IPage<PokemonItem>> = this.pagination$
    .pipe(
      switchMap((pagination) => this.pokemonHttp.getPokemonPage(pagination)),
      shareReplay(1),
    )

  public paginationConfig$: Observable<PaginationConfig> = this.pokemonsPage$
    .pipe(
      map((pagination) => ({
        pageSize: 10,
        totalRecords: pagination.count
      }))
    )

  private query = new BehaviorSubject<string>("")
  public suggestions$ = this.pokemonsPage$
    .pipe(
      map((page) => {
        return page.results.map((item) => item.name)
      })
    )

  getPokemonDetail(name: string) {
    this.selectedPokemonName.next(name)
  }

  setPage(newPage: number) {
    const limit = 10
    const offset = newPage * limit - limit + 1
    this._pagination.next({
      offset,
      limit
    })
  }

  getSuggestions(query: string) {
    this.pokemonsPage$.subscribe()
  }
}
