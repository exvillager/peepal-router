import { describe, expect, test, beforeAll } from "bun:test";
import { TrieRouter } from "./router";
import { describeDieselPortedCases } from "./router.shared-cases";

describe("TrieRouter.find - Middleware Order", () => {

  let router: TrieRouter;

  beforeAll(() => {
    router = new TrieRouter();

    router.addMiddleware("/", () => "mw1");
    router.addMiddleware("/", () => "mw2");

    router.add("GET", "/", () => "handler");
  });

  test("middleware order", () => {
    const result = router.find("GET", "/");
    const outputs = result?.handler?.map((fn: () => any) => fn());
    expect(outputs).toEqual(["mw1", "mw2", "handler"]);
  });
});

describeDieselPortedCases("find");
