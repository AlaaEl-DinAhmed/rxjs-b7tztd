import { mergeMap, concatMap, switchMap, fromEvent, filter, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const URL = 'https://jsonplaceholder.typicode.com/todos/';

const input = document.getElementById('input');

fromEvent(input, 'input')
  .pipe(
    filter((input: any) => input.target.value.length >= 1),
    concatMap((event: any) => {
      return fromFetch(`${URL}${event.target.value}`).pipe(
        switchMap((response) => response.json())
      );
    })
  )
  .subscribe(console.log);
