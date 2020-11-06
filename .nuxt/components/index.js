export { default as Logo } from '../../components/Logo.vue'
export { default as User } from '../../components/User.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyUser = import('../../components/User.vue' /* webpackChunkName: "components/User" */).then(c => c.default || c)
