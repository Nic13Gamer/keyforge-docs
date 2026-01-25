'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

type QueryTabsProps = {
  param: string;
  defaultValue?: string;
  items: {
    value: string;
    label: React.ReactNode;
  }[];
};

export function QueryTabs(props: QueryTabsProps) {
  return (
    <Suspense
      fallback={<Tabs {...props} activeValue={props.defaultValue ?? ''} />}
    >
      <Wrapper {...props} />
    </Suspense>
  );
}

function Wrapper(props: QueryTabsProps) {
  const searchParams = useSearchParams();

  return (
    <Tabs
      {...props}
      activeValue={searchParams.get(props.param) ?? props.defaultValue ?? ''}
      searchParams={searchParams.toString()}
    />
  );
}

function Tabs(
  props: Pick<QueryTabsProps, 'items' | 'param'> & {
    activeValue: string;
    searchParams?: string;
  },
) {
  return (
    <div className="bg-fd-card inline-flex h-10 w-full items-center justify-center rounded-lg p-1 gap-2">
      {props.items.map((item) => (
        <button
          key={item.value}
          data-active={props.activeValue === item.value}
          onClick={() => {
            if (props.searchParams !== undefined) {
              const params = new URLSearchParams(props.searchParams);
              params.set(props.param, item.value);

              window.history.replaceState(null, '', `?${params.toString()}`);
            }
          }}
          className="data-[active=true]:bg-fd-background data-[active=false]:hover:bg-fd-accent/60 transition-colors text-fd-foreground inline-flex size-full items-center justify-center gap-2 rounded-md px-5 text-sm font-medium whitespace-nowrap data-[active=true]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
