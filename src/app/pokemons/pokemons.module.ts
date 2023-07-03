import { NgModule } from '@angular/core'
import { PokemonPageComponent } from './views/pokemon-page/pokemon-page.component'
import { TableModule } from 'primeng/table'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { StyleClassModule } from 'primeng/styleclass'
import { CommonModule } from '@angular/common'
import { PokemonsRoutingModule } from './pokemons.routing.module'
import { ButtonModule } from 'primeng/button'
import { PaginatorModule } from 'primeng/paginator'
import { DividerModule } from 'primeng/divider'
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    PokemonPageComponent,
  ],
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ReactiveFormsModule,
        AutoCompleteModule,
        HttpClientModule,
        StyleClassModule,
        PokemonsRoutingModule,
        ButtonModule,
        PaginatorModule,
        DividerModule,
        DialogModule,
    ],
})
export class PokemonsModule {
}
