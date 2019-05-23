import axios, { AxiosInstance } from 'axios'
import { WordpressOptions, Post } from './types'

class Wordpress {
  private http: AxiosInstance

  constructor(options: WordpressOptions) {
    this.http = axios.create({
      baseURL: options.url,
    })
  }

  public allPosts(): Promise<Array<Post>> {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.http.get('/posts')
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default Wordpress
