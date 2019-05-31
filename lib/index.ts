import axios, { AxiosInstance } from 'axios'

import {
  WordpressOptions,
  PostsOptions,
  RetrievePostOptions,
  Post,
  Category,
  CategoriesOptions,
} from './types'

class Wordpress {
  private http: AxiosInstance

  public initialize(options: WordpressOptions) {
    this.http = axios.create({
      baseURL: options.url,
    })
  }

  public async allPosts(
    options: PostsOptions = {
      per_page: 10,
      page: 1,
      order: 'desc',
      orderby: 'date',
    },
  ): Promise<Post[]> {
    const response = await this.http.get('/posts', {
      params: options,
    })
    return response.data
  }

  public async getPost(options: RetrievePostOptions): Promise<Post> {
    const response = await this.http.get('/posts', {
      params: options,
    })
    return response.data
  }

  public async allCategories(
    options: CategoriesOptions = {
      per_page: 10,
      page: 1,
    },
  ): Promise<Category[]> {
    const response = await this.http.get('/categories', {
      params: options,
    })
    return response.data
  }
}

export const wordpress = new Wordpress()
export * from './types'
