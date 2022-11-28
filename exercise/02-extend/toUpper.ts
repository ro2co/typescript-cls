import type { Equal, Expect } from '@type-challenges/utils'

type Str = string

type ToUpper<Str> = Uppercase<Str>

type cases = [
  Expect<Equal<ToUpper<"hello">, "HELLO">>
]
