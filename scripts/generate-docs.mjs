import * as OpenAPI from 'fumadocs-openapi';

const out = './content/docs/api-reference';

void OpenAPI.generateFiles({
  input: ['./openapi.json'],
  output: out,
  per: 'operation',
  groupBy: 'tag',
});
