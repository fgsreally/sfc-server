import { app } from "sfc-server";
import.meta.glob("./server/*.ts", { eager: true });

import.meta.glob("./**/*.vue", { eager: true });

app.listen(8080, () => {
  console.log("listen~");
});
