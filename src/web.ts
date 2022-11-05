import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { getURLpath } from "./utils";
import { expressConfig } from "./common";
let ctx: any = {};
let instance: AxiosInstance = axios;

for (let i of expressConfig) {
  ctx[i] = function () {};
}
export function initCtx(app: AxiosInstance) {
  instance = app;
}

export function createCtx(router: string = "") {
  ctx.get = function (path: string) {
    return (config: AxiosRequestConfig) =>
      instance.get(getURLpath(router, path), config);
  };
  ctx.post = function (path: string) {
    return (data: any, config: AxiosRequestConfig) =>
      instance.post(getURLpath(router, path), data, config);
  };
  ctx.put = function (path: string) {
    return (data: any, config: AxiosRequestConfig) =>
      instance.put(getURLpath(router, path), data, config);
  };
  ctx.delete = function (path: string) {
    return (config: AxiosRequestConfig) =>
      instance.delete(getURLpath(router, path), config);
  };
  return ctx;
}

export let $ = createCtx;




