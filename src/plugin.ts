import { PluginOption } from "vite";
import { transformSync } from "esbuild";
export const scriptRE = /(<script\b(?:\s[^>]*>|>))(.*?)<\/script>/gims;

export function pureServer(): PluginOption {
  return {
    name: "vite-plugin-pureServer",

    transform(code: string, id: string) {
      let serverScript = "";
      if (!id.includes("node_modules") && /\.vue$/.test(id)) {
        code.replace(scriptRE, (str, tag, script) => {
          if (tag?.includes("server")) {
            serverScript += script;
          }
          return "";
        });
        return transformSync(serverScript, { loader: "ts" }).code;
      }
    },
  };
}
