import { Component, Input } from '@angular/core'
import { PokemonDetail } from '../../domain/symbols'

@Component({
  selector: 'app-pokemon-detail',
  template: `

    <div class="bg-white border border-gray-200 rounded-lg shadow">
      <h1 class="text-center m-0">{{pokemon.name}}</h1>
      <div class="text-center mt-1">Seed Pokemon</div>

      <div class="grid mt-1">
        <label class="col-6 text-right">ID</label>
        <label class="col-6"># {{pokemon.id}}</label>
      </div>

      <div class="grid">
        <label class="col-6 text-right">Height</label>
        <label class="col-6">{{pokemon.height}}m</label>
      </div>

      <div class="grid">
        <label class="col-6 text-right">Weight</label>
        <label class="col-6">{{pokemon.weight}} Kg</label>
      </div>

      <div class="grid">
        <label class="col-6 text-right">Abilities</label>
        <div class="col-6">
        <span
          *ngFor="let ability of pokemon.abilities;let index=index"
          class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-{{colors[index]}}-800 bg-{{colors[index]}}-100 rounded"
        >{{ability.ability.name}}
        </span>
        </div>
      </div>

      <div class="grid">
        <label class="col-6 text-right">Type</label>
        <div class="col-6">
          <label>Grass</label>
          <label>Poison</label>
        </div>
      </div>

      <div class="grid">
        <label class="col-6 text-right">Forms</label>
        <div class="col-6">
          <label>Venusaur</label>
          <label>Mega Venusaur</label>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() pokemon!: PokemonDetail

  colors = [
    'blue',
    'gray',
    'red',
    'green',
    'yellow',
    'indigo',
    'purple',
    'pink'
  ]
}
