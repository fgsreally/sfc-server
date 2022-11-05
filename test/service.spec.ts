import { createCtx, initApp } from "../dist/server.js";
import { createCtx as clientCtx, initCtx } from "../dist/web";
import axios from "axios";
import { describe, it, expect } from "vitest";

describe("server and client part", function () {
  var server = initApp();
  server.listen(80);
  let app = createCtx();
  app.get("/new", (req, res) => {
    res.send("find");
  });

  it("client part", async function () {
    initCtx(
      axios.create({
        baseURL: "http://localhost:80/",
      })
    );
    let req = clientCtx().get("/new");
    const clentRes = await req();

    expect(clentRes.data).toBe("find");
  });
});
