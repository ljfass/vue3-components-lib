import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    // target: "modules",
    outDir: "es", // 默认为dist
    minify: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "../build/es",
          // preserveModulesRoot: "src",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: "../build/lib",
          // preserveModulesRoot: "src",
        },
      ],
    },
    lib: {
      entry: path.resolve(__dirname, "./index.ts"),
      // name: "yuntuUi",
      // fileName: "yuntu-ui",
      // formats: ["es", "cjs"], // 默认是['es', 'umd']，如果使用了多个配置入口，则是['es', 'cjs']
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: "./src",
      //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
      outputDir: ["../build/es/src", "../build/lib/src"],
      tsConfigFilePath: "../../tsconfig.json",
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        // 这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          // rollup内置方法，将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: "asset",
            fileName: key,
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
});
