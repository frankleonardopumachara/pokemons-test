import { Component, Input } from '@angular/core'
import { PokemonDetail } from '../../domain/symbols'

@Component({
  selector: 'app-pokemon-detail',
  template: `

    <div class="bg-white border border-gray-200 rounded-lg shadow">
      <h1 class="text-center m-0 text-2xl font-bold text-gray-600">{{pokemon.name | uppercase}}</h1>

      <div class="grid grid-cols-12 gap-7 mt-1">
        <label class="col-span-6 text-right font-semibold">ID</label>
        <label class="col-span-6">#{{pokemon.id}}</label>
      </div>

      <div class="grid grid-cols-12 gap-7">
        <label class="col-span-6 text-right font-semibold">Height</label>
        <label class="col-span-6">{{pokemon.height}}m</label>
      </div>

      <div class="grid grid-cols-12 gap-7">
        <label class="col-span-6 text-right font-semibold">Weight</label>
        <label class="col-span-6">{{pokemon.weight}} Kg</label>
      </div>

      <div class="grid grid-cols-12 gap-7">
        <label class="col-span-6 text-right font-semibold">Abilities</label>
        <div class="col-span-6">
          <span
            *ngFor="let ability of pokemon.abilities;let index=index"
            class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium rounded"
            [ngClass]="colorsClasses[index % 8]"
          >{{ability.ability.name}} - {{index}}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-7">
        <label class="col-span-6 text-right font-semibold">Type</label>
        <div class="col-span-6">
          <span
            *ngFor="let type of pokemon.types;let index=index"
            class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium rounded"
            [ngClass]="colorsClasses[index % 8]"
          >{{type.type.name}}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-7">
        <label class="col-span-6 text-right font-semibold">Forms</label>
        <div class="col-span-6">
          <span
            *ngFor="let form of pokemon.forms;let index=index"
            class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium rounded"
            [ngClass]="colorsClasses[index % 8]"
          >{{form.name}}
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  @Input() pokemon!: PokemonDetail

  colorsClasses = [
    'text-blue-800 bg-blue-100',
    'text-gray-800 bg-gray-100',
    'text-red-800 bg-red-100',
    'text-green-800 bg-green-100',
    'text-yellow-800 bg-yellow-100',
    'text-indigo-800 bg-indigo-100',
    'text-purple-800 bg-purple-100',
    'text-pink-800 bg-pink-100',
  ]
}
