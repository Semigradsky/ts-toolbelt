/**
Get the instance type wrapped within a `Promise`
@param P A promise
@returns [[Any]]
@example
```ts
import {C} from 'ts-toolbelt'

const promise = new Promise<string>((res, rej) => res('x'))

type test0 = C.PromiseType<typeof promise>  // string
type test1 = C.PromiseType<Promise<number>> // number
```
*/
export type PromiseType<P extends any> =
    P extends Promise<infer A>
    ? A
    : P
