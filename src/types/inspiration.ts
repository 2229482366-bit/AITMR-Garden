export type InspirationType = 'text' | 'image' | 'quote'

export interface Inspiration {
  id: string
  type: InspirationType
  content: string
  imageUrl?: string
  author?: string
  createdAt: string
}
