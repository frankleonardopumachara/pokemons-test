import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ColumnConfig } from '../../domain/symbols'

@Component({
  selector: 'my-table',
  template: `

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3"
              *ngFor="let column of columns"
          >
            {{column.title}}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b hover:bg-gray-50 cursor-pointer"
            *ngFor="let item of items"
            [ngClass]="{
              'bg-gray-100': item === _selected
            }"
            (click)="selectRow(item)"
        >
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              *ngFor="let column of columns"
          >
            {{item[column.dataProperty]}}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {
  @Input() columns: ColumnConfig<T>[] = []
  @Input() items: T[] = []

  @Input()
  set selected(item: T | null) {
    this._selected = item
  }

  @Output() onSelectedChange = new EventEmitter<T>()

  _selected: T | null = null

  selectRow(item: T) {
    this._selected = item
    this.onSelectedChange.emit(item)
  }
}
