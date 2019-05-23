# Wordpress SDK

Built with [axios](https://www.npmjs.com/package/axios), this package provides a wrapper for [Wordpress REST API](https://developer.wordpress.org/rest-api/) for fetch data from wordpress hosted sites.

## Usage

### Creating an instance

```js
import wordpress from 'wordpress-sdk'
// or
const wordpress = require('wordpress')

wp.initialize({
  // your wordpress rest api base URL
  url: 'https://developer.wordpress.org/wp-json/wp/v2',
})
```

### Fetching posts

```js
wp.allPosts()
  .then(posts => {
    console.log(posts)
  })
  .catch(error => {
    console.log(error.message)
  })
```
