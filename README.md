# `@lffg/charcode-sequence`

📜 Character code sequence encoder and decoder.

[![Build Status](https://circleci.com/gh/lffg/charcode-sequence.svg?style=svg)](https://circleci.com/gh/lffg/charcode-sequence)
[![NPM](https://img.shields.io/npm/v/@lffg/charcode-sequence.svg?logo=npm)](https://npmjs.org/package/@lffg/charcode-sequence)
![Uses TypeScript](https://img.shields.io/badge/Uses-Typescript-294E80.svg)

## Installing

```shell
yarn add @lffg/charcode-sequence

# If you're using NPM:
# npm install @lffg/charcode-sequence --save
```

## Basic Usage

```typescript
import { encode, decode } from '@lffg/charcode-sequence'

encode('Luiz') // [76, 117, 105, 122]
decode([76, 117, 105, 122]) // "Luiz"
```

## Authors and License

[lffg](https://github.com/lffg) and [contributors](https://github.com/lffg/charcode-sequence/graphs/contributors).

MIT License, see the included [MIT](https://github.com/lffg/charcode-sequence/blob/master/LICENSE) file.
