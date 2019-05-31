import { ListOptions } from './core'

export interface PostsOptions extends ListOptions {
  /**
   * Limit result set to posts assigned to specific authors.
   */
  author?: number
  /**
   * Ensure result set excludes posts assigned to specific authors.
   */
  author_exclude?: number
  /**
   * Limit result set to posts assigned one or more statuses.
   *
   * Default: `publish`
   */
  status?: string
  /**
   * Limit result set to all items that have the specified term assigned in the categories taxonomy.
   */
  categories?: number[]
  /**
   * Limit result set to all items except those that have the specified term assigned in the categories taxonomy.
   */
  categories_exclude?: number[]
  /**
   * Limit result set to all items that have the specified term assigned in the tags taxonomy.
   */
  tags?: number[]
  /**
   * Limit result set to all items except those that have the specified term assigned in the tags taxonomy.
   */
  tags_exclude?: number[]
  /**
   * Limit result set to items that are sticky.
   */
  sticky?: boolean
  /**
   * Sort collection by object attribute.
   *
   * Default: `date`
   *
   * One of: `author`, `date`, `id`, `include`, `modified`, `parent`, `relevance`, `slug`, `title`
   */
  orderby?:
    | 'author'
    | 'date'
    | 'id'
    | 'include'
    | 'modified'
    | 'parent'
    | 'relevance'
    | 'slug'
    | 'title'
}

/**
 * @see https://developer.wordpress.org/rest-api/reference/posts/#retrieve-a-post
 */
export interface RetrievePostOptions {
  /**
   * Unique identifier for the object.
   */
  id: number
  /**
   * Scope under which the request is made; determines fields present in response.
   *
   * Default: `view`
   *
   * One of: `view`, `embed`, `edit`
   */
  context?: 'view' | 'embed' | 'edit'
  /**
   * The password for the post if it is password protected.
   */
  password?: string
}

/**
 * @see https://developer.wordpress.org/rest-api/reference/posts/#schema
 */
export interface Post {
  /**
   * Unique identifier for the object.
   */
  id: number
  /**
   * The date the object was published, in the site's timezone.
   */
  date: string
  /**
   * The date the object was published, as GMT.
   */
  date_gmt: string
  /**
   * The globally unique identifier for the object.
   */
  guid: {
    rendered: string
  }
  /**
   * URL to the object.
   */
  link: string
  /**
   * The date the object was last modified, in the site's timezone.
   */
  modified: string
  /**
   * The date the object was last modified, as GMT.
   */
  modified_gmt: string
  /**
   * An alphanumeric identifier for the object unique to its type.
   */
  slug: string
  /**
   * A named status for the object.
   */
  status: string
  /**
   * Type of Post for the object.
   */
  type: string
  /**
   * A password to protect access to the content and excerpt.
   */
  password: string
  /**
   * The title for the object.
   */
  title: {
    rendered: string
  }
  /**
   * The content for the object.
   */
  content: {
    rendered: string
    protected: boolean
  }
  /**
   * The ID for the author of the object.
   */
  author: number
  /**
   * The excerpt for the object.
   */
  excerpt: {
    rendered: string
    protected: boolean
  }
  /**
   * The ID of the featured media for the object.
   */
  featured_media: number
  /**
   * Whether or not comments are open on the object.
   */
  comment_status: string
  /**
   * Whether or not the object can be pinged.
   */
  ping_status: string
  /**
   * The format for the object.
   *
   * One of: `standard`, `aside`, `chat`, `gallery`, `link`, `image`, `quote`, `status`, `video`, `audio`
   */
  format:
    | 'standard'
    | 'aside'
    | 'chat'
    | 'gallery'
    | 'link'
    | 'image'
    | 'quote'
    | 'status'
    | 'video'
    | 'audio'
  /**
   * Meta fields.
   */
  meta: object
  /**
   * Whether or not the object should be treated as sticky.
   */
  sticky: boolean
  /**
   * The theme file to use to display the object.
   */
  template: string
  /**
   * The terms assigned to the object in the category taxonomy.
   */
  categories: number[]
  /**
   * The terms assigned to the object in the `post_tag` taxonomy.
   */
  tags: number[]
}
