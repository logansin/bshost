import Image from 'next/image';
import Link from 'next/link';
import type { HostingProvider } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Server } from 'lucide-react';

interface ProviderCardProps {
  provider: HostingProvider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
        {provider.logoUrl && (
          <Image
            src={provider.logoUrl}
            alt={`${provider.name} logo`}
            width={64}
            height={64}
            className="rounded-md object-contain aspect-square"
            data-ai-hint={provider.dataAiHint || 'hosting plan'}
          />
        )}
        <div className="flex-1">
          <CardTitle className="text-xl">{provider.name}</CardTitle>
        </div>
        <Server className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{provider.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={provider.websiteUrl} rel="noopener noreferrer">
            Подробнее
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
