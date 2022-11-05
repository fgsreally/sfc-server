import { PluginOption } from "vite";
import { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";

import express, { Application, IRouterMatcher } from "express";

declare let app: Application;

declare function createCtx<Req = any, Res = any, Config = any>(
  router?: string
): Omit<express.Router, "get" | "post" | "put" | "delete"> & {
  get: IRouterMatcher<
    (config?: AxiosRequestConfig) => AxiosResponse<Res, Config>
  >;
  post: IRouterMatcher<
    (data: Req, config?: AxiosRequestConfig) => AxiosResponse<Res, Config>
  >;
  put: IRouterMatcher<
    (data: Req, config?: AxiosRequestConfig) => AxiosResponse<Res, Config>
  >;
  delete: IRouterMatcher<
    (config?: AxiosRequestConfig) => AxiosResponse<Res, Config>
  >;
};
declare let $: typeof createCtx;
declare function applyRouter(path: string): typeof $;

declare function initCtx(instance: AxiosInstance): void;

export { $, app, applyRouter, initCtx, createCtx, express };
