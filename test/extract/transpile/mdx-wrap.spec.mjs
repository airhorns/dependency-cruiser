import { equal } from "node:assert/strict";
import { readFileSync } from "node:fs";
import normalizeSource from "../normalize-source.utl.mjs";
import mdxWrapFunction from "#extract/transpile/mdx-wrap.mjs";

const mdxWrap = mdxWrapFunction();

describe("[I] mdx transpiler", () => {
  it("tells the mdx transpiler is available", () => {
    equal(mdxWrap.isAvailable(), true);
  });

  it("transpiles typescript", async () => {
    const lExpected = await normalizeSource(
      mdxWrap.transpile(
        readFileSync("./test/extract/transpile/__mocks__/test.mdx", "utf8"),
      ),
    );
    const lFound = await normalizeSource(
      readFileSync("./test/extract/transpile/__fixtures__/test.mdx", "utf8"),
    );
    equal(lExpected, lFound);
  });
});
