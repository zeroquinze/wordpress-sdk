import axios, { AxiosInstance } from 'axios'

import {
  WordpressOptions,
  PostsOptions,
  RetrievePostOptions,
  Post,
  Category,
  RetrieveCategoryOptions,
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

  /**
   *
   * Retrieve a post by unique ID.
   *
   * @param id Unique ID of post.
   * @param options Query options
   */
  public async getPostById(
    id: number,
    options: RetrievePostOptions,
  ): Promise<Post> {
    const response = await this.http.get(`/posts/${id}`, {
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

  /**
   *
   * Retrieve a category by unique ID.
   *
   * @param id Unique ID of category.
   * @param options Query options
   */
  public async getCategoryById(
    id: number,
    options: RetrieveCategoryOptions,
  ): Promise<Category> {
    const response = await this.http.get(`/categories/${id}`, {
      params: options,
    })
    return response.data
  }
}

export const wordpress = new Wordpress()
export * from './types'
