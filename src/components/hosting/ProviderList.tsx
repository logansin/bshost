import type { HostingProvider } from '@/types';
import { ProviderCard } from './ProviderCard';

interface ProviderListProps {
  providers: HostingProvider[];
}

export function ProviderList({ providers }: ProviderListProps) {
  if (providers.length === 0) {
    return <p className="text-center text-muted-foreground">Нет хостинг-провайдеров для отображения.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {providers.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
}
