export const SITE = {
  name: 'Bill Kohler',
  role: 'Software Engineer',
  location: 'Boston, MA',
  email: 'bkohler4@gmail.com',
  github: 'https://github.com/williamkohler',
  url: 'https://williamkohler.info',
  resume: '/bill-kohler-resume.pdf',
  description:
    'Senior software engineer in Boston building Elixir and Phoenix systems — order-fulfillment integrations, observability, and platforms that handle real volume.',
} as const;

export const skillGroups = [
  { label: 'Languages', items: ['Elixir', 'Ruby', 'SQL', 'JavaScript'] },
  {
    label: 'Frameworks',
    items: ['Phoenix', 'Phoenix LiveView', 'Oban', 'Ruby on Rails', 'GraphQL'],
  },
  {
    label: 'Infrastructure',
    items: ['AWS (ECS, RDS, CloudWatch, S3)', 'Terraform', 'Docker', 'PostgreSQL', 'CI/CD'],
  },
  {
    label: 'Practices',
    items: [
      'Distributed systems',
      'API integration (REST, SOAP, webhooks)',
      'Idempotency',
      'Observability',
      'Incident response',
    ],
  },
] as const;

export const education = [
  {
    school: 'Boston University',
    credential: 'Certificate in Computer Science',
    year: '2017',
    logo: '/logos/boston-university.svg',
  },
  {
    school: 'Northeastern University',
    credential: 'B.S. Music, Minor in Business Administration',
    year: '2013',
    logo: '/logos/northeastern.svg',
    // Dark red on a near-black background reads poorly; lift it in dark mode.
    brightenOnDark: true,
  },
] as const;
