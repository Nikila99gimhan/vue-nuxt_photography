import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5eea71b4 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _4ce764ce = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _78f1cf8e = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _491b2c0e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _8cd0aa3e = () => interopDefault(import('..\\pages\\portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _a4e13654 = () => interopDefault(import('..\\pages\\portfolio-details.vue' /* webpackChunkName: "pages/portfolio-details" */))
const _1f7abc2a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5eea71b4,
    name: "about"
  }, {
    path: "/blog",
    component: _4ce764ce,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _78f1cf8e,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _491b2c0e,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _8cd0aa3e,
    name: "portfolio"
  }, {
    path: "/portfolio-details",
    component: _a4e13654,
    name: "portfolio-details"
  }, {
    path: "/",
    component: _1f7abc2a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
