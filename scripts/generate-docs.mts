import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./openapi/*.yaml'],
  output: './content/docs/api-reference',
  render: (title, description) => {
    return {
      frontmatter: [
        '---',
        `title: ${title}`,
        `description: ${description}`,
        'toc: false',
        '---',
      ].join('\n'),
    };
  },
});
