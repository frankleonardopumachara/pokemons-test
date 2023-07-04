import { Component, inject, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { PokemonPagePresenter } from './pokemon-page.presenter'
import { ColumnConfig, PaginationConfig } from '../../../my-ui/table/domain/symbols'
import { PokemonDetail, PokemonItem } from '../../domain/symbols'

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
  providers: [PokemonPagePresenter],
})
export class PokemonPageComponent implements OnInit {

  presenter = inject(PokemonPagePresenter)

  searchFC = new FormControl('')

  tableColumns: ColumnConfig[] = [
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
  pokemonsI: any[] = [
    {
      id: 1,
      name: 'fearow',
      url: 'https://pokeapi.co/api/v2/pokemon/22/'
    },
    {
      id: 2,
      name: 'ekans',
      'url': 'https://pokeapi.co/api/v2/pokemon/23/'
    },
    {
      id: 3,
      name: 'arbok',
      'url': 'https://pokeapi.co/api/v2/pokemon/24/'
    },
    {
      id: 4,
      name: 'pikachu',
      'url': 'https://pokeapi.co/api/v2/pokemon/25/'
    },
    {
      id: 5,
      name: 'raichu',
      'url': 'https://pokeapi.co/api/v2/pokemon/26/'
    },
    {
      id: 6,
      name: 'sandshrew',
      'url': 'https://pokeapi.co/api/v2/pokemon/27/'
    },
    {
      id: 7,
      name: 'sandslash',
      'url': 'https://pokeapi.co/api/v2/pokemon/28/'
    },
    {
      id: 8,
      name: 'nidoran-f',
      'url': 'https://pokeapi.co/api/v2/pokemon/29/'
    },
    {
      id: 9,
      name: 'nidorina',
      'url': 'https://pokeapi.co/api/v2/pokemon/30/'
    },
    {
      id: 10,
      name: 'nidoqueen',
      'url': 'https://pokeapi.co/api/v2/pokemon/31/'
    },
  ]
  pokemons = []
  selected = false

  selectedPokemon: PokemonDetail | null = null

  pagination: PaginationConfig = {
    totalRecords: 90,
    pageSize: 10
  }

  selectedItem: PokemonItem | null = null

  ngOnInit(): void {
  }

  onPageChange(currentPage: number) {
    console.log(currentPage)
  }

  toggleDetail() {
    this.selected = !this.selected
  }

  getSuggestions(query: string) {
    console.log(query)
    this.suggestions = [...Array(10).keys()].map(item => query + '-' + item)
  }

  search(query: string) {
    console.log('buscar', query)
  }

  onSelectItem(item: Record<string, any>) {
  }
}
