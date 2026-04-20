export interface ExperienceEntry {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  skills: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Acme Corp',
    location: 'Remote',
    startDate: '2023-01',
    endDate: null,
    description: 'Led development of core platform features, improved system reliability and performance.',
    skills: ['TypeScript', 'Vue', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer',
    company: 'Startup Inc',
    location: 'San Francisco, CA',
    startDate: '2020-06',
    endDate: '2022-12',
    description: 'Built and shipped customer-facing features across a full-stack TypeScript application.',
    skills: ['React', 'Python', 'AWS', 'Docker'],
  },
  {
    role: 'Junior Developer',
    company: 'Agency XYZ',
    location: 'Austin, TX',
    startDate: '2018-09',
    endDate: '2020-05',
    description: 'Delivered web projects for clients across multiple industries.',
    skills: ['JavaScript', 'PHP', 'WordPress', 'CSS'],
  },
]
