import { getLlmText, source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();
  const scanned = (await Promise.all(pages.map(getLlmText))).filter(Boolean);

  const openapiPage = pages.find((page) => page.data.type === 'openapi');
  if (openapiPage && openapiPage.data.type === 'openapi') {
    scanned.push(`# OpenAPI Specification

${JSON.stringify(openapiPage.data.getSchema().bundled, null, 2)}`);
  }

  return new Response(scanned.join('\n\n\n'));
}
