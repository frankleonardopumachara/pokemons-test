import {filter, Observable} from "rxjs";

function valueIsNotNull<T>(value: T | null): value is T {
  return value !== null
}

export function isNotNull<T>() {
  return (source$: Observable<T | null>): Observable<T> =>
    source$.pipe(
      filter(valueIsNotNull)
    )
}
