export interface Project {
  title: string
  description: string
  tags: string[]
  url: string | null
  repo: string | null
  image: string | null
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'Project Alpha',
    description: 'A full-stack application that solves a real-world problem with elegant UX and a robust backend.',
    tags: ['Vue', 'Node.js', 'PostgreSQL'],
    url: 'https://example.com',
    repo: 'https://github.com/username/project-alpha',
    image: null,
    featured: true,
  },
  {
    title: 'CLI Tool Beta',
    description: 'A developer productivity tool that automates repetitive workflows and integrates with common services.',
    tags: ['TypeScript', 'Node.js', 'Open Source'],
    url: null,
    repo: 'https://github.com/username/cli-tool-beta',
    image: null,
    featured: true,
  },
  {
    title: 'Side Project Gamma',
    description: 'An experimental project exploring new technologies and interaction patterns.',
    tags: ['Python', 'FastAPI', 'Machine Learning'],
    url: 'https://example.com',
    repo: null,
    image: null,
    featured: false,
  },
]
