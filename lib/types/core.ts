export interface WordpressOptions {
  url: string
}

export interface ListOptions {
  page?: number
  per_page?: number
  search?: string
  exclude?: number
  include?: number
  order?: 'asc' | 'desc'
  slug?: string
  offset?: number
}
