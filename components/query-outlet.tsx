'use client';

import { useSearchParams } from 'next/navigation';
import { Tabs as TabsPrimitive } from 'radix-ui';
import { Suspense } from 'react';

type QueryOutletProps = {
  param: string;
  defaultValue?: string;
  children: React.ReactNode;
};

export function QueryOutlet(props: QueryOutletProps) {
  return (
    <Suspense
      fallback={
        <Outlet activeValue={props.defaultValue ?? ''}>{props.children}</Outlet>
      }
    >
      <Wrapper {...props} />
    </Suspense>
  );
}

function Wrapper(props: QueryOutletProps) {
  const searchParams = useSearchParams();

  return (
    <Outlet
      activeValue={searchParams.get(props.param) ?? props.defaultValue ?? ''}
    >
      {props.children}
    </Outlet>
  );
}

function Outlet(props: { activeValue: string; children: React.ReactNode }) {
  return (
    <TabsPrimitive.Root value={props.activeValue}>
      {props.children}
    </TabsPrimitive.Root>
  );
}

export function QueryOutletCase(props: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <TabsPrimitive.Content value={props.value}>
      {props.children}
    </TabsPrimitive.Content>
  );
}
