'use client';

import { useSearchParams } from 'next/navigation';
import { Tabs as TabsPrimitive } from 'radix-ui';

export function QueryOutlet(props: {
  param: string;
  defaultValue?: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();

  return (
    <TabsPrimitive.Root
      value={searchParams.get(props.param) ?? props.defaultValue}
    >
      {props.children}
    </TabsPrimitive.Root>
  );
}

export function QueryOutletMatch(props: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <TabsPrimitive.Content value={props.value}>
      {props.children}
    </TabsPrimitive.Content>
  );
}
