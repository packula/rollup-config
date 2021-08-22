# Snout Rollup Configuration

[![Current version][badge-version-image]][badge-version-link]

[badge-version-image]: https://img.shields.io/npm/v/@snout/rollup-config?label=%40snout%2Frollup-config&logo=npm&style=for-the-badge
[badge-version-link]: https://npmjs.com/package/@snout/rollup-config

## Usage

```js
// rollup.config.js
import {createConfig} from '@snout/rollup-config'
import packageJson from './package.json'

export default createConfig(packageJson)
```
