import tryImport from "#utl/try-import.mjs";
import meta from "#meta.cjs";

const mdx = await tryImport(
  "@mdx/mdx-js",
  meta.supportedTranspilers["@mdx/mdx-js"],
);

export default function mdxWrap() {
  return {
    isAvailable: () => mdx !== false,

    version: () => `@mdx/mdx-js@${mdx.version}`,

    transpile: async (pSource, _pFileName, pTranspileOptions = {}) => {
      const result = await mdx(pSource, {
        ...pTranspileOptions,
        skipExport: true,
      });
      return result.code;
    },
  };
}
