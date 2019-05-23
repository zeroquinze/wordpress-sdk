import axios, { AxiosInstance } from 'axios'

import { WordpressOptions, ListPostsOptions, Post } from './types'

class Wordpress {
  private http: AxiosInstance

  public initialize(options: WordpressOptions) {
    this.http = axios.create({
      baseURL: options.url
    })
  }

  public async allPosts(
    options: ListPostsOptions = {
      limit: 10,
      page: 1,
      order: 'desc',
      orderBy: 'date'
    }
  ): Promise<Post[]> {
    const response = await this.http.get('/posts', {
      /* eslint-disable */
      params: {
        page: options.page,
        per_page: options.limit,
        order: options.order,
        orderby: options.orderBy
      }
      /* eslint-enable */
    })
    return response.data
  }
}

export const wordpress = new Wordpress()
export * from './types'
