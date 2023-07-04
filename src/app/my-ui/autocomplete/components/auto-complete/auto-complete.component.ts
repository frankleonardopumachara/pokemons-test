import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core'
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'my-auto-complete',
  template: `
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
        autocomplete="off"
        placeholder="search pokemon"
        #searchInput
        [(ngModel)]="value"
        (keyup.enter)="onPressEnter($event)"
      >

      <div
        class="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        [hidden]="!showSuggestions"
      >
        <ul role="menu">
          <li *ngFor="let suggestion of suggestions; trackBy: trackBy"
              (click)="setQuery(suggestion)"
              role="menuitem"
              class="hover:bg-gray-100 hover:cursor-pointer"
          >
            <span class="block px-4 py-2 hover:bg-gray-100">
              {{suggestion}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements AfterViewInit, OnDestroy {
  @Input() suggestions: string[] = []
  @Output() onRequestSuggestions = new EventEmitter<string>()
  @Output() onSearch = new EventEmitter<string>()
  @ViewChild('searchInput') searchInput!: ElementRef

  value = ''
  showSuggestions = false

  destroy$ = new Subject()

  ngAfterViewInit(): void {
    this.listenSearch()
  }

  listenSearch() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter((event: any) => event.keyCode !== 13), // hide suggestions on enter
        map((event: any) => event.target.value as string),
        distinctUntilChanged(),
        debounceTime(500),
        takeUntil(this.destroy$),
      )
      .subscribe((query) => {
        this.showSuggestions = true
        this.onRequestSuggestions.emit(query)
      })
  }

  trackBy(index: number, name: string) {
    return name
  }

  setQuery(query: string) {
    this.value = query
    this.onSearch.emit(query)
    this.showSuggestions = false
  }

  onPressEnter(event: any) {
    this.setQuery(event.target.value)
  }

  ngOnDestroy(): void {
    this.destroy$.next(null)
    this.destroy$.complete()
  }
}
