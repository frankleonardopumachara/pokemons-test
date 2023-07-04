import {Component, inject} from '@angular/core'
import {PokemonPagePresenter} from './pokemon-page.presenter'
import {ColumnConfig} from '../../../my-ui/table/domain/symbols'
import {PokemonDetail, PokemonItem} from '../../domain/symbols'

@Component({
  selector: 'app-pokemon-page',
  template: `
    <div class="mt-7 mx-1 md:mx-7">

      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-6">
          <my-auto-complete
            *ngIf="presenter.suggestions$ | async as suggestions"
            [suggestions]="suggestions"
            (onRequestSuggestions)="getSuggestions($event)"
            (onSearch)="search($event)"
          ></my-auto-complete>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-2 mt-7 items-stretch">
        <div class="col-span-1 md:col-span-7 h-full">
          <my-table
            *ngIf="presenter.pokemonsPage$ | async as page"
            [columns]="tableColumns"
            [items]="page.results"
            (onSelectedChange)="onSelectItem($event)"
          ></my-table>
          <div class="mt-1 flex justify-end">
            <my-paginator
              *ngIf="presenter.paginationConfig$ | async as config"
              [config]="config"
              (onCurrentPageChange)="onPageChange($event)"
            >
            </my-paginator>
          </div>
        </div>

        <div class="col-span-1 md:col-span-5 h-full"
             *ngIf="presenter.selectedPokemon$ | async as selectedPokemon">
          <app-pokemon-detail
            [pokemon]="selectedPokemon"
          >
          </app-pokemon-detail>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pokemon-page.component.scss'],
  providers: [PokemonPagePresenter],
})
export class PokemonPageComponent {

  presenter = inject(PokemonPagePresenter)

  tableColumns: ColumnConfig<PokemonItem>[] = [
    {
      title: 'Name',
      dataProperty: 'name'
    },
    {
      title: 'Url',
      dataProperty: 'url'
    }
  ]

  suggestions = ['Frank', 'Leonardo']

  selectedPokemon: PokemonDetail | null = null

  selectedItem: PokemonItem | null = null

  onPageChange(currentPage: number) {
    this.presenter.setPage(currentPage)
  }

  getSuggestions(query: string) {
    console.log(query)
    this.suggestions = [...Array(10).keys()].map(item => query + '-' + item)
  }

  search(query: string) {
    console.log('buscar', query)
  }

  onSelectItem(item: PokemonItem): void {
    this.presenter.getPokemonDetail(item.name)
  }
}
