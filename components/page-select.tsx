'use client';

import Link from 'fumadocs-core/link';
import { cn } from 'fumadocs-ui/components/api';
import { usePathname } from 'next/navigation';

type PageSelectProps = {
  pages: {
    href: string;
    title: string;
    description?: string;
  }[];
};

export function PageSelect({ pages }: PageSelectProps) {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-2 gap-4 @container">
      {pages.map((page) => {
        const active = pathname === page.href;

        return (
          <Link
            key={page.href}
            href={page.href}
            data-card
            className={cn(
              'block rounded-lg border bg-fd-card/80 p-4 text-fd-card-foreground shadow-md transition-colors hover:bg-fd-accent/70 @max-lg:col-span-full',
              active &&
                'bg-fd-primary/10 border-fd-primary hover:bg-fd-primary/10'
            )}
          >
            <h3 className="not-prose mb-1 text-sm font-medium">{page.title}</h3>

            {page.description ? (
              <p className="mb-0 text-sm text-fd-muted-foreground">
                {page.description}
              </p>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}
