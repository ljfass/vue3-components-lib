import * as index$1 from "./src/index.js";
import { Button } from "./src/button/index.js";
import { Input } from "./src/input/index.js";
const index = {
  install: (app) => {
    for (let c in index$1) {
      app.use(index$1[c]);
    }
  }
};
export {
  Button,
  Input,
  index as default
};
