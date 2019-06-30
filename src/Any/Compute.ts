import {Depth} from '../Object/_Internal'

/** Force TS to load a type that has not been computed
 * (to resolve composed types that TS hasn't resolved)
 * @param A
 * @returns **`A`**
 * @example
 * ```ts
 * import {A} from 'ts-toolbelt'
 *
 * type test0 = A.Compute<{x: 'x'} & {y: 'y'}> // {x: 'x', y: 'y'}
 * ```
 */
export type Compute<A extends any, depth extends Depth = 'flat'> = {
    'flat': {[K in keyof A]: A[K]},
    'deep': {[K in keyof A]: Compute<A[K]>},
}[depth]
