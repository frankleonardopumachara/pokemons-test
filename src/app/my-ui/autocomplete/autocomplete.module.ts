import { NgModule } from '@angular/core'
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component'
import { FormsModule } from '@angular/forms'
import { NgForOf } from '@angular/common'

@NgModule({
  imports: [
    FormsModule,
    NgForOf
  ],
  declarations: [
    AutoCompleteComponent,
  ],
  exports: [
    AutoCompleteComponent,
  ]
})
export class AutocompleteModule {
}
