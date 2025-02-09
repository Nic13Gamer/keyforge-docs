import { LucideIcon } from 'lucide-react';

export function create({ icon: Icon }: { icon?: LucideIcon }) {
  return (
    <div className="rounded-md bg-fd-muted border p-1 shadow-sm">{Icon && <Icon />}</div>
  );
}
