import { Component, inject, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { PokemonPagePresenter } from './pokemon-page.presenter'
import { PokemonItem } from '../../domain/symbols'

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
  pokemonsI: PokemonItem[] = [
    {
      'name': 'fearow',
      'url': 'https://pokeapi.co/api/v2/pokemon/22/'
    },
    {
      'name': 'ekans',
      'url': 'https://pokeapi.co/api/v2/pokemon/23/'
    },
    {
      'name': 'arbok',
      'url': 'https://pokeapi.co/api/v2/pokemon/24/'
    },
    {
      'name': 'pikachu',
      'url': 'https://pokeapi.co/api/v2/pokemon/25/'
    },
    {
      'name': 'raichu',
      'url': 'https://pokeapi.co/api/v2/pokemon/26/'
    },
    {
      'name': 'sandshrew',
      'url': 'https://pokeapi.co/api/v2/pokemon/27/'
    },
    {
      'name': 'sandslash',
      'url': 'https://pokeapi.co/api/v2/pokemon/28/'
    },
    {
      'name': 'nidoran-f',
      'url': 'https://pokeapi.co/api/v2/pokemon/29/'
    },
    {
      'name': 'nidorina',
      'url': 'https://pokeapi.co/api/v2/pokemon/30/'
    },
    {
      'name': 'nidoqueen',
      'url': 'https://pokeapi.co/api/v2/pokemon/31/'
    },
    {
      'name': 'nidoran-m',
      'url': 'https://pokeapi.co/api/v2/pokemon/32/'
    },
    {
      'name': 'nidorino',
      'url': 'https://pokeapi.co/api/v2/pokemon/33/'
    },
    {
      'name': 'nidoking',
      'url': 'https://pokeapi.co/api/v2/pokemon/34/'
    },
    {
      'name': 'clefairy',
      'url': 'https://pokeapi.co/api/v2/pokemon/35/'
    },
    {
      'name': 'clefable',
      'url': 'https://pokeapi.co/api/v2/pokemon/36/'
    },
    {
      'name': 'vulpix',
      'url': 'https://pokeapi.co/api/v2/pokemon/37/'
    },
    {
      'name': 'ninetales',
      'url': 'https://pokeapi.co/api/v2/pokemon/38/'
    },
    {
      'name': 'jigglypuff',
      'url': 'https://pokeapi.co/api/v2/pokemon/39/'
    },
    {
      'name': 'wigglytuff',
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
