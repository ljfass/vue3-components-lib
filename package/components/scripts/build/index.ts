import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath } from "../utils/path";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";

// 删除build
export const removeDist = () => {
  console.log("removeDist=====", `${pkgPath}/build`);

  return delPath(`${pkgPath}/build`);
};

// 打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/build/lib/src`))
    .pipe(dest(`${pkgPath}/build/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
