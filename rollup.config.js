import typescript from 'rollup-plugin-typescript2'

export function createConfig (packageJson) {
  const {main, module} = packageJson

  return {
    input: 'src/index.ts',
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
