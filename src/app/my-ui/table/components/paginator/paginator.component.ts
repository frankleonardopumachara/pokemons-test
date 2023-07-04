import { Component, EventEmitter, Input, Output } from '@angular/core'
import { PaginationConfig } from '../../domain/symbols'

@Component({
  selector: 'my-paginator',
  template: `
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">

        <li *ngIf="hasPrevious">
          <span
             class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          >
            <span class="sr-only">Previous</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </li>

        <li *ngFor="let page of pages">
          <span
             class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
             [ngClass]="{
                'bg-blue-50': currentPage === page
             }"
             (click)="changePage(page)"
          >{{ page }}
          </span>
        </li>

        <li *ngIf="true">
          <span
             class="block px-3 py-2 leading-tight bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          >
            <span class="sr-only">Next</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  pagesCount = 0
  totalRecords = 0
  pageSize = 0
  pages: number[] = []
  hasPrevious = false
  currentPage = 1
  hasNext = false

  @Input()
  set config(value: PaginationConfig) {
    this.totalRecords = value.totalRecords
    this.pageSize = value.pageSize
    this.pagesCount = Math.round(this.totalRecords / this.pageSize)
    this.pages = Array.from(Array(this.pagesCount).keys()).map((page) => page + 1)
    this.hasPrevious = this.currentPage === 1
    this.hasNext = this.currentPage === this.pagesCount
  }

  @Output() onCurrentPageChange = new EventEmitter<number>()

  changePage(page: number) {
    this.currentPage = page
    this.onCurrentPageChange.emit(page)
  }
}
