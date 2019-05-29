import { ListOptions } from './core'

export interface CategoriesOptions extends ListOptions {
  parent?: number
}

export interface Category {
  id: number
  count: number
  description: string
  url: string
  name: string
  slug: string
  parent?: number
}
