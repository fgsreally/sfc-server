import express, { Application, Router } from "express";
import { adaptPath } from "./utils";

export let app: Application = express();

let routerSet: { [key in string]: Router } = {};

export function createCtx(
  router: string = ""
  //   cb: (req: Request, res: Response) => any
) {
  if (router) {
    return applyRouter(router);
  } else {
    return app;
  }
}

export function applyRouter(path: string) {
  if (!routerSet[path]) {
    let Router = express.Router();
    routerSet[path] = Router;
    app.use(adaptPath(path), Router);
  }
  return routerSet[path];
}

export let $ = createCtx;
export { express };
