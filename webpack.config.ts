/* eslint-disable import/no-extraneous-dependencies */
import merge from "webpack-merge";
import { resolve } from "path";
import { VueLoaderPlugin } from "vue-loader";
import { Configuration } from "webpack";
import CopyPlugin from "copy-webpack-plugin";

const config:Configuration = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(ts|js)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  externals: { p5: "p5" },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([
      { from: "src/index.d.ts", to: "", toType: "file" },
    ]),
  ],
};

export default [
  merge(config, {
    entry: resolve(`${__dirname }/src/entry.ts`),
    output: {
      filename: "vue-p5-component.min.js",
      libraryTarget: "window",
      library: "VueP5Component",
    },
  }),
  merge(config, {
    entry: resolve(`${__dirname }/src/p5-component.vue`),
    output: {
      filename: "vue-p5-component.js",
      libraryTarget: "umd",
      library: "vue-p5-component",
      umdNamedDefine: true,
    },
  }),
];