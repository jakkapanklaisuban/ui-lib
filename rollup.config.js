import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js", // Entry point of your library
  output: {
    dir: "dist", // Output file path
    format: "es", // Output format (e.g., ES modules)
    sourcemap: true, // Generate source maps
    preserveModules: true,
  },
  plugins: [
    nodeResolve({ extensions: [".js", ".jsx"] }),
    babel({ babelHelpers: "bundled" }),
    commonjs(),
  ],
  external: ["react"], // List any dependencies you want to exclude from the bundle
};
