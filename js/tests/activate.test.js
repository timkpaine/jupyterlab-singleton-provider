import "isomorphic-fetch";

import {ISingletonProvider, PLUGIN_ID} from "../src/index";

describe("Checks activate", () => {
  test("Check activate", () => {
    expect(ISingletonProvider).toBeDefined();
    expect(PLUGIN_ID).toBe("jupyterlab-singleton-provider");
  });
});
