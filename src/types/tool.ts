export type ToolCategory = '设计' | '开发' | '效率' | '数据'

export interface ToolItem {
  id: string
  name: string
  category: ToolCategory
  description: string
  url: string
  logoSvg: string
}
