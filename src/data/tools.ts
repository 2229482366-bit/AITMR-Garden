import type { ToolItem } from '../types/tool'

const circleLogo = (label: string, bgColor: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <circle cx="48" cy="48" r="44" fill="${bgColor}" />
      <text x="50%" y="53%" text-anchor="middle" font-size="30" font-family="Arial, sans-serif" fill="#4A4036" font-weight="700">${label}</text>
    </svg>`,
  )}`

export const tools: ToolItem[] = [
  {
    id: 'figma',
    name: 'Figma',
    category: '设计',
    description: '协作式界面设计与原型工具，快速完成页面结构与交互动线。',
    url: 'https://www.figma.com/',
    logoSvg: circleLogo('F', '#F3D8BF'),
  },
  {
    id: 'coolors',
    name: 'Coolors',
    category: '设计',
    description: '高效生成配色方案，帮助快速确定品牌色与视觉层级。',
    url: 'https://coolors.co/',
    logoSvg: circleLogo('C', '#EED5B8'),
  },
  {
    id: 'visual-studio-code',
    name: 'VS Code',
    category: '开发',
    description: '轻量而强大的代码编辑器，插件生态完善，适合前端全流程开发。',
    url: 'https://code.visualstudio.com/',
    logoSvg: circleLogo('V', '#D4E4F6'),
  },
  {
    id: 'github',
    name: 'GitHub',
    category: '开发',
    description: '托管代码与协作开发的平台，支持版本管理与自动化工作流。',
    url: 'https://github.com/',
    logoSvg: circleLogo('G', '#DEE1E7'),
  },
  {
    id: 'notion',
    name: 'Notion',
    category: '效率',
    description: '知识管理与项目协同工具，统一记录灵感、任务与文档。',
    url: 'https://www.notion.so/',
    logoSvg: circleLogo('N', '#EDE8E1'),
  },
  {
    id: 'raycast',
    name: 'Raycast',
    category: '效率',
    description: '效率启动器与命令中心，减少上下文切换，提升日常工作节奏。',
    url: 'https://www.raycast.com/',
    logoSvg: circleLogo('R', '#E0DCEC'),
  },
  {
    id: 'tableau-public',
    name: 'Tableau Public',
    category: '数据',
    description: '数据可视化与故事呈现工具，适合快速构建可交互图表。',
    url: 'https://public.tableau.com/',
    logoSvg: circleLogo('T', '#CFE8E1'),
  },
  {
    id: 'kaggle',
    name: 'Kaggle',
    category: '数据',
    description: '数据集与建模社区，便于练习分析思维与验证模型方案。',
    url: 'https://www.kaggle.com/',
    logoSvg: circleLogo('K', '#D7E7F7'),
  },
]
