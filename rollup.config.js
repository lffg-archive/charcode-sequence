import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/charcode-sequence.ts',
  plugins: [typescript({ clean: true })],
  output: [
    { file: 'dist/charcode-sequence-cjs.js', format: 'cjs' },
    { file: 'dist/charcode-sequence.mjs', format: 'es' }
  ]
};
