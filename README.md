# Deploy Nuxt to GitHub Pages

## Configuration

In [`nuxt.config.ts`](https://github.com/pixelatedstack/nuxtjs-github-pages/blob/main/nuxt.config.ts), add in `defineNuxtConfig`

```javascript
  app: {
    baseURL: '/nuxtjs-github-pages/',
    buildAssetsDir: '/assets/'
  },
  nitro: {
    output: {
      publicDir: 'docs'
    }
  },
```

## GitHub

(if running for the first time)
1. Go to `Settings`
2. Go to `Pages`
3. Change **Branch** to `Main` and **folder** to `/docs` and **Save**

## Deployment

- `npm run generate`
- `git add docs`
- `git commit`
- `git push origin main`
