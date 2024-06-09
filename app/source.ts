import { map } from '@/.map';
import { create } from '@/components/ui/icon';
import { loader } from 'fumadocs-core/source';
import { createMDXSource, defaultSchemas } from 'fumadocs-mdx';
import { icons } from 'lucide-react';
import { z } from 'zod';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/',
  rootDir: 'docs',
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        toc: z.boolean().default(true),
      }),
    },
  }),
  icon(icon) {
    if (!icon) return;

    if (icon in icons)
      return create({ icon: icons[icon as keyof typeof icons] });
  },
});
