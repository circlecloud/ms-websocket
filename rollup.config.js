import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

const external = ['path', 'fs', 'typescript']

export default {
    input: 'src/index.ts',
    plugins: [
        typescript(),
    ],
    treeshake: false,
    output: [
        {
            format: 'cjs',
            sourcemap: true,
            file: pkg.main || `dist/${pkg.name}.js`
        }
    ]
}
