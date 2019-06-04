import { ListOptions } from './core'

export interface ListUsersOptions extends ListOptions {
  roles?: number[]
}

export interface User {
  /**
   * Unique identifier for the user.
   */
  id: number
  /**
   * Login name for the user.
   */
  username: string
  /**
   * Display name for the user.
   */
  name: string
  /**
   * First name for the user.
   */
  first_name: string
  /**
   * Last name for the user.
   */
  last_name: string
  /**
   * The email address for the user.
   */
  email: string
  /**
   * URL of the user.
   */
  url: string
  /**
   * Description of the user.
   */
  description: string
  /**
   * Author URL of the user.
   */
  link: string
  /**
   * Locale for the user.
   */
  locale: string
  /**
   * The nickname for the user.
   */
  nickname: string
  /**
   * An alphanumeric identifier for the user.
   */
  slug: string
  /**
   * Registration date for the user.
   */
  registered_date: string
  /**
   * Roles assigned to the user.
   */
  roles: number[]
  /**
   * All capabilities assigned to the user.
   */
  capabilities: object
  /**
   * Any extra capabilities assigned to the user.
   */
  extra_capabilities: object
  /**
   * Avatar URLs for the user.
   */
  avatar_urls: object
  /**
   * Meta fields.
   */
  meta: object
}
