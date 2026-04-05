import { renderMermaidSVG } from 'beautiful-mermaid';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import {
  ScrollArea,
  ScrollBar,
  ScrollViewport,
} from 'fumadocs-ui/components/ui/scroll-area';

export async function Mermaid({ chart }: { chart: string }) {
  try {
    const svg = renderMermaidSVG(chart, {
      bg: 'var(--color-fd-background)',
      fg: 'var(--color-fd-foreground)',
      interactive: true,
      transparent: true,
      padding: 1,
    });

    return (
      <ScrollArea
        type="always"
        className="rounded-xl border border-fd-border bg-fd-card shadow-sm"
      >
        <ScrollViewport className="max-h-128 overscroll-contain">
          <div
            className="[&_svg]:mx-auto p-4"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </ScrollViewport>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  } catch {
    return (
      <CodeBlock title="Mermaid">
        <Pre>{chart}</Pre>
      </CodeBlock>
    );
  }
}
