# XavRsl.com

Welcome to my resume's website repo 🙇‍♂️.

https://xavrsl.com

## What I'm using

### GitConnect
I used to use an online resume generator as I found it convenient to have a centralised place to keep track of my work experience, education, skills and so on. But I didn't like being limited to a template and having to pay a monthly fee for a service that I didn't really use on a regular basis. Then I discoverd https://gitconnected.com/xavrsl! It's a great tool and is open-source. But the templates they provide didn't really work for me. So I decided to ceate a website and use the GitConnect API.

### NuxtJS
The site uses https://nuxtjs.org/. I could have just created a VueJS site and it would have been fine but I want to be able to create a Blog on this website in the future and Nuxt's content module is so great I really want to use it.

### TailwindCSS / TailwindUI
I'm a big fan of https://tailwindcss.com/. As a developper I don't really want to spend days figuring out what CSS I should use to center an element on the page consistently on every browser. That's what frameworks are for! And I also want my page to stay as light as possible so I don't want to load a bunch of useless CSS or JS. Thankfully, TailwindCSS can be loaded into NuxtJS without any effort and it is configured so that only the css you use will eventually be loaded on your page.

### Netlify
https://www.netlify.com/ is a great way to host a website. The deployment workflow can be handled by GitHub Actions really easily and there's a ton of services like serverless functions, forms, analytics that can be added on your website in the blink of an eye.

## Plans for the future
Here's a list of the features I'd like to add to my site in the future.
- [ ] As mentionned above, a blog
- [ ] Give more insights on the projects I've worked on
- [ ] Talk about the things I do on my free time
- [ ] Translate the content (GitConnected should allow to create multiple resumes in the future)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
