export type InspirationType = 'text' | 'image' | 'quote'

export interface Inspiration {
  id: string
  type: InspirationType
  content: string
  imageUrl?: string
  mediaPosition?: 'top' | 'bottom'
  author?: string
  createdAt: string
}
