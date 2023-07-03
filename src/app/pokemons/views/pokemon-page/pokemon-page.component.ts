import {Component, inject, OnInit} from '@angular/core'
import {FormControl} from '@angular/forms'
import {PokemonPagePresenter} from './pokemon-page.presenter'

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
  providers: [PokemonPagePresenter],
})
export class PokemonPageComponent implements OnInit {

  presenter = inject(PokemonPagePresenter)

  searchFC = new FormControl('')
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
    {
      id: 11,
      name: 'nidoran-m',
      'url': 'https://pokeapi.co/api/v2/pokemon/32/'
    },
    {
      id: 12,
      name: 'nidorino',
      'url': 'https://pokeapi.co/api/v2/pokemon/33/'
    },
    {
      id: 13,
      name: 'nidoking',
      'url': 'https://pokeapi.co/api/v2/pokemon/34/'
    },
    {
      id: 14,
      name: 'clefairy',
      'url': 'https://pokeapi.co/api/v2/pokemon/35/'
    },
    {
      id: 15,
      name: 'clefable',
      'url': 'https://pokeapi.co/api/v2/pokemon/36/'
    },
    {
      id: 16,
      name: 'vulpix',
      'url': 'https://pokeapi.co/api/v2/pokemon/37/'
    },
    {
      id: 17,
      name: 'ninetales',
      'url': 'https://pokeapi.co/api/v2/pokemon/38/'
    },
    {
      id: 18,
      name: 'jigglypuff',
      'url': 'https://pokeapi.co/api/v2/pokemon/39/'
    },
    {
      id: 19,
      name: 'wigglytuff',
      'url': 'https://pokeapi.co/api/v2/pokemon/40/'
    }
  ]
  pokemons = []
  selected = false

  pagination = {
    first: 10,
    rows: 5,
    totalRecords: 100,
    rowsPerPageOptions: [5, 10, 20]
  }

  ngOnInit(): void {
  }

  onPageChange(event: any) {
  }

  toggleDetail() {
    this.selected = !this.selected
  }
}
