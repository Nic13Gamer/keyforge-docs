import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
  input: ['./openapi/*.yaml'],
  output: './content/docs/api-reference',
  render: (title, description, content) => {
    return {
      frontmatter: [
        '---',
        `title: ${title}`,
        `description: ${description}`,
        'toc: false',
        '---',
      ].join('\n'),
      content: `${description}\n\n${content}`,
    };
  },
});
