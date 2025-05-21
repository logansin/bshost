import { z } from 'zod';

export interface HostingProvider {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  logoUrl?: string;
  dataAiHint?: string; // For placeholder image generation
}

// Schemas and types for ComplianceVerifier are removed as the feature is no longer part of the application.
