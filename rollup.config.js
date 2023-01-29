/* eslint-disable */
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['js', 'jsx', 'ts', 'tsx', 'mjs'];
const external = ['react', 'react-dom', 'styled-components'];
const packageJson = require('./package.json');

const config = [
  {
    external,
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions }),
      babel(),
      commonjs({ include: 'node_modules/**' }),
      peerDepsExternal(),
      typescript({ tsconfig: './tsconfig.json' }),
      image(),
    ],
  },
];

export default config;
