import { MetadataRoute } from 'next'
import { DOMAINS } from './domenii/data'

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified = data ultimei modificări de conținut a paginii; se actualizează odată cu pagina
  return [
    {
      url: 'https://turbosnail.ro',
      lastModified: '2026-10-18',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://turbosnail.ro/blog',
      lastModified: '2026-10-19',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://turbosnail.ro/servicii',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://turbosnail.ro/servicii/automatizari-ai',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/servicii/consultanta-ai',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/servicii/chatbot-ai-romania',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/servicii/cold-email-outbound',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/servicii/paid-ads-ai',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/servicii/seo-ai',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/servicii/raportare-analytics',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/test-vizibilitate',
      lastModified: '2026-10-18',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/domenii',
      lastModified: '2026-10-18',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...DOMAINS.map((d) => ({
      url: `https://turbosnail.ro/domenii/${d.slug}`,
      lastModified: '2026-10-18',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: 'https://turbosnail.ro/blog/ce-este-inteligenta-artificiala',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/automatizari-ai-pentru-afaceri-romania',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/automatizare-procese-afaceri-romania',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/automatizare-procese-firme',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/sisteme-control-procese-afaceri',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/automatizare-completa-afacere',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/chatbot-ai-pentru-site-romania',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/cold-email-b2b-romania-ghid-complet',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://turbosnail.ro/blog/consultanta-ai-ce-include-cum-alegi',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/automatizare-rapoarte-saptamanale-lunare',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/automatizare-procese-business-ghid-2026',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/cum-sa-automatizezi-emailurile-firmei',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/agent-ai-pentru-vanzari-romania',
      lastModified: '2026-10-21',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/intreaba-inteligenta-artificiala',
      lastModified: '2026-10-10',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/automatizare-date',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/ce-este-un-agent-ai',
      lastModified: '2026-10-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://turbosnail.ro/blog/automatizare-documente',
      lastModified: '2026-10-19',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
