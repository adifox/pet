const StoryblokClient = require('storyblok-js-client')

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  coche: {
    clear: 'auto',
    type: 'memory',
  },
})

export const getCacheVersion = async () => {
  return Storyblok.get('cdn/spaces/me', {})
}

export const getStoryblokData = async (url, options) => {
  const data = await Storyblok.get(url, options)
  return data
}
