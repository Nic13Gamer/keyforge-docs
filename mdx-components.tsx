import { CardLinkSelect } from '@/components/card-link-select';
import { APIPage } from '@/components/openapi/api-page';
import * as QueryOutletComponents from '@/components/query-outlet';
import * as AccordionComponents from 'fumadocs-ui/components/accordion';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import * as StepsComponents from 'fumadocs-ui/components/steps';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { QueryTabs } from './components/query-tabs';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...AccordionComponents,
    ...StepsComponents,
    ...TabsComponents,
    ...QueryOutletComponents,
    ImageZoom,
    TypeTable,
    CardLinkSelect,
    QueryTabs,
    APIPage,

    ...components,
  };
}
