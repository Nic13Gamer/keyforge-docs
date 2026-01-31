import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import * as z from 'zod';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
    schema: frontmatterSchema.extend({
      pageTitle: z.string().optional(),
    }),
  },
});

export default defineConfig({
  mdxOptions: {
    remarkNpmOptions: { persist: { id: 'package-manager' } },
  },
});
