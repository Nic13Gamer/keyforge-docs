'use client';

import { useSearchParams } from 'next/navigation';

export function QueryTabs(props: {
  param: string;
  defaultValue?: string;
  items: {
    value: string;
    label: React.ReactNode;
  }[];
}) {
  const searchParams = useSearchParams();

  return (
    <div className="bg-fd-card inline-flex h-10 w-full items-center justify-center rounded-lg p-1 gap-2">
      {props.items.map((item) => (
        <button
          key={item.value}
          data-active={
            searchParams.has(props.param)
              ? searchParams.get(props.param) === item.value
              : props.defaultValue === item.value
          }
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(props.param, item.value);

            window.history.replaceState(null, '', `?${params.toString()}`);
          }}
          className="data-[active=true]:bg-fd-background data-[active=false]:hover:bg-fd-accent/60 transition-colors text-fd-foreground inline-flex size-full items-center justify-center gap-2 rounded-md px-5 text-sm font-medium whitespace-nowrap data-[active=true]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
