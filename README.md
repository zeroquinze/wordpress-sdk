# [WIP] Wordpress SDK

[![npm](https://img.shields.io/npm/v/wordpress-sdk.svg)](https://www.npmjs.com/package/wordpress-sdk) [![GitHub](https://img.shields.io/github/license/iclouds/wordpress-sdk.svg)](https://opensource.org/licenses/MIT)

Built with [axios](https://www.npmjs.com/package/axios), this package provides a wrapper for [Wordpress REST API](https://developer.wordpress.org/rest-api/) for fetching data from wordpress hosted sites.

## Installation

`$ npm install wordpress-sdk --save`

or if you use yarn

`$ yarn add wordpress-sdk`

## Usage

### Initializing configuration

```js
import { wordpress } from 'wordpress-sdk'
// or
const { wordpress } = require('wordpress-sdk')

wordpress.initialize({
  // your wordpress rest api base URL
  url: 'https://developer.wordpress.org/wp-json/wp/v2',
})
```

### Fetching posts

```js
wordpress
  .allPosts()
  .then(posts => {
    console.log(posts)
  })
  .catch(error => {
    console.log(error.message)
  })
```

### Fetching categories

```js
wordpress
  .allCategories()
  .then(categories => {
    console.log(categories)
  })
  .catch(error => {
    console.log(error.message)
  })
```
