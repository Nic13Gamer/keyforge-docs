import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docs } from 'fumadocs-mdx:collections/server';
import { openapiPlugin } from 'fumadocs-openapi/server';

export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  plugins: [openapiPlugin(), lucideIconsPlugin()],
});

export async function getLlmText(page: InferPageType<typeof source>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.pageTitle || page.data.title} (${page.url})

${processed}`;
}
