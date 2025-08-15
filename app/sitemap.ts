import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amaanbarmare.dev';
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/experience',
    '/projects', 
    '/skills',
    '/education',
    '/contact',
    '/resume',
  ];

  // Experience routes
  const experienceRoutes = [
    '/experience/mu-sigma-intern',
    '/experience/augle-ai-2024',
    '/experience/augle-ai-2023',
    '/experience/psu-math-grader',
    '/experience/psu-learning-assistant',
  ];

  // Project routes
  const projectRoutes = [
    '/projects/nexthire',
    '/projects/ar-navigation',
    '/projects/alyra',
    '/projects/concurrency-channels',
    '/projects/cpu-scheduler',
    '/projects/malloc-lab',
    '/projects/stock-monitor-bot',
  ];

  const allRoutes = [...routes, ...experienceRoutes, ...projectRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}