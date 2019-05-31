import { ListOptions } from './core'

export interface CategoriesOptions extends ListOptions {
  /**
   * The parent term ID.
   */
  parent?: number
}

export interface RetrieveCategoryOptions {
  /**
   * Scope under which the request is made; determines fields present in response.
   *
   * Default: `view`
   *
   * One of: `view`, `embed`, `edit`
   */
  context?: 'view' | 'embed' | 'edit'
}

export interface Category {
  /**
   * Unique identifier for the term.
   */
  id: number
  /**
   * Number of published posts for the term.
   */
  count: number
  /**
   * HTML description of the term.
   */
  description: string
  /**
   * URL of the term.
   */
  link: string
  /**
   * HTML title for the term.
   */
  name: string
  /**
   * An alphanumeric identifier for the term unique to its type.
   */
  slug: string
  /**
   * The parent term ID.
   */
  parent?: number
}
