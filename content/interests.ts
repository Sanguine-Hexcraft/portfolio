export interface Interest {
  label: string
  emoji: string
  description: string
}

export const interests: Interest[] = [
  { label: 'Open Source', emoji: '🔓', description: 'Contributing to and maintaining open source projects.' },
  { label: 'Music', emoji: '🎸', description: 'Playing guitar and exploring music production.' },
  { label: 'Photography', emoji: '📷', description: 'Street and landscape photography.' },
  { label: 'Gaming', emoji: '🎮', description: 'Strategy games and indie titles.' },
  { label: 'Hiking', emoji: '🥾', description: 'Weekend trails and backcountry camping.' },
  { label: 'Reading', emoji: '📚', description: 'Sci-fi, history, and technical books.' },
]
