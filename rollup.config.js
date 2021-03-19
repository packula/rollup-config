const typescript = require('rollup-plugin-typescript2')

module.exports = {
  createConfig,
}

function createConfig (packageJson) {
  const {dependencies = {}, main, module, peerDependencies = {}} = packageJson

  return {
    input: 'src/index.ts',
    external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
    plugins: [
      typescript({
        clean: true,
        tsconfigOverride: {
          include: ['src/**/*'],
        },
      }),
    ],
    output: [
      {
        format: 'cjs',
        file: main,
        sourcemap: true,
      },
      {
        format: 'es',
        file: module,
        sourcemap: true,
      },
    ],
  }
}
