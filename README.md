# Packula Rollup configuration

[![Current version][badge-version-image]][badge-version-link]

[badge-version-image]: https://img.shields.io/npm/v/@packula/rollup-config?label=%40packula%2Frollup-config&logo=npm&style=for-the-badge
[badge-version-link]: https://npmjs.com/package/@packula/rollup-config

## Usage

```js
// rollup.config.js
import {createConfig} from '@packula/rollup-config'
import packageJson from './package.json'

export default createConfig(packageJson)
```
