import { NgModule } from '@angular/core'
import { PokemonPageComponent } from './views/pokemon-page/pokemon-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { PokemonsRoutingModule } from './pokemons.routing.module'
import { TableModule } from '../my-ui/table/table.module'
import { AutocompleteModule } from '../my-ui/autocomplete/autocomplete.module'
import { PokemonDetailComponent } from './components/pokemon-detailc/pokemon-detail.component'

@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PokemonsRoutingModule,
    TableModule,
    AutocompleteModule,
  ],
})
export class PokemonsModule {
}
