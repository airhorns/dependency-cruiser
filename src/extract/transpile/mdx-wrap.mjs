import tryImport from "#utl/try-import.mjs";
import meta from "#meta.cjs";

const mdx = await tryImport(
  "@mdx-js/mdx",
  meta.supportedTranspilers["@mdx-js/mdx"],
);

export default function mdxWrap() {
  return {
    isAvailable: () => mdx !== false,

    version: () => `@mdx-js/mdx@${mdx.version}`,

    transpile: (pSource, _pFileName, pTranspileOptions = {}) => {
      const result = mdx.sync(pSource, {
        ...pTranspileOptions,
        skipExport: true,
      });
      return result;
    },
  };
}
