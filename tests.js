import assert from "assert";
import {name as appName} from "./less-bootstrap-test.js";

describe("less-bootstrap-test", () => {
  it("should export its name", () => {
    assert.strictEqual(appName, "less-bootstrap-test");
  });
});
