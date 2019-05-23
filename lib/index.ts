import axios, { AxiosInstance } from 'axios'

import { WordpressOptions, Post } from './types'

class Wordpress {
  private http: AxiosInstance

  private constructor (options: WordpressOptions) {
    this.http = axios.create({
      baseURL: options.url
    })
  }

  public async allPosts (): Promise<Post[]> {
    const response = await this.http.get('/posts')
    return response.data
  }
}

export default Wordpress
