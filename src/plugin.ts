import { PluginOption } from "vite";
export const scriptRE = /(<script\b(?:\s[^>]*>|>))(.*?)<\/script>/gims;

export function pureServer(): PluginOption {
  return {
    name: "vite-plugin-pureServer",

    transform(code: string, id: string) {
      let serverScript = "";
      if (!id.includes("node_modules") && /\.vue$/.test(id)) {
        code.replace(scriptRE, (str, tag, script) => {
          console.log("tag", tag, id);

          if (tag?.includes("server")) {
            serverScript += script;
          }
          return "";
        });
        console.log("serverScript", serverScript);

        return serverScript;
      }
    },
  };
}
