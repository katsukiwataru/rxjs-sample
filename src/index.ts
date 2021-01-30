import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const squareOdd = of({ name: 'taro', age: 10}, { name: 'jiro', age: 11}, { name: 'toru', age: 12})
  .pipe(
    map(({ name }) => name),
    filter((name) => name !== undefined)
  );

squareOdd.subscribe(x => console.log(x));
