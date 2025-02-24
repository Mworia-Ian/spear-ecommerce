import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // config: {
  //   logLevel: "All",
  //   // callbackUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/uploadthing`,
  // },
});
