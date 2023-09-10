export default {
  "providers": {
    defaultProvider: {
      type: "contentful",
      prefix: "CTF",
      space: import.meta.env.CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
      templates: {
        CTFContentType1: [
          {
            path: '/content-type1/:id',
            component: './src/templates/ContentType1.vue'
          },
          {
            path: '/content-type1/:textField',
            component: './src/templates/ContentType1.vue'
          },
        ],    
        CTFContentType2: [
          {
            path: '/content-type2/:id',
            component: './src/templates/ContentType2.vue'
          },
          {
            path: '/content-type2/:textField',
            component: './src/templates/ContentType2.vue'
          },
        ],    
      }
    }
  }
}
