import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "dist/index.js",
  output: [
    {
      file: "bundle/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "bundle/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: [".js"], // resolve JS files from dist
    }),
    commonjs(),
    terser(),
  ],
};
