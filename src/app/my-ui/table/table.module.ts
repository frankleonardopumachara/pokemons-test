import {NgModule} from '@angular/core'
import {TableComponent} from './components/table/table.component'
import {PaginatorComponent} from './components/paginator/paginator.component'
import {JsonPipe, NgClass, NgForOf, NgIf} from '@angular/common'

@NgModule({
  declarations: [
    TableComponent,
    PaginatorComponent,
  ],
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    JsonPipe
  ],
  exports: [
    TableComponent,
    PaginatorComponent,
  ]
})
export class TableModule {
}
