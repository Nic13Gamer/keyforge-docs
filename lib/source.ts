import { type InferPageType, loader, multiple } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docs } from 'fumadocs-mdx:collections/server';
import { openapiPlugin, openapiSource } from 'fumadocs-openapi/server';
import { openapi } from './openapi';

export const source = loader(
  multiple({
    docs: docs.toFumadocsSource(),
    openapi: await openapiSource(openapi, {
      baseDir: 'api-reference',
      per: 'operation',
      groupBy: 'tag',
    }),
  }),
  {
    baseUrl: '/',
    plugins: [openapiPlugin(), lucideIconsPlugin()],
  },
);

export async function getLlmText(page: InferPageType<typeof source>) {
  if (page.data.type === 'openapi') {
    return null;
  }

  const processed = await page.data.getText('processed');

  return `# ${page.data.pageTitle || page.data.title} (${page.url})

${processed.trim()}`;
}
