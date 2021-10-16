# deno_fizzbuzz

Fizz Buzz at deno.

## Usage

```typescript
import { fizzbuzz } from "./fizzbuzz.ts";

for (let i = 1; i <= 100; i++) {
  console.log(fizzbuzz(i));
}
```

↓

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
・
・
・
```

## Test

```sh
deno test
```
