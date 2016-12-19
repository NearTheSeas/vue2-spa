// // 同步加载所有组件
// const pages = [
//   require('../pages/component'),
//   require('../pages/dashboard'),
//   require('../pages/about'),
//   require('../pages/404')
// ]
//
// const defaultPage = pages.find(p => p.default) || { path: '/' }
//
// const defaults = [{ name: 'default', path: '/', redirect: defaultPage.path }]
//
// export default defaults.concat(pages.map(page => ({ name: page.name, path: page.path, component: page })))

// 异步分块加载所有组件
// https://github.com/wengang/vue-router-async-components/blob/master/src/main.js#L26
// TODO: code splite group
// https://github.com/webpack/webpack/issues/2369
export default [{
  name: 'default',
  path: '/',
  redirect: {
    name: 'list'
  }
}, {
  name: 'list',
  path: '/list',
  component: () => System.import('../pages/list')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'login',
  path: '/login',
  component: () => System.import('../pages/login')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'supplierRegister',
  path: '/supplierRegister',
  component: () => System.import('../pages/supplierRegister')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'register',
  path: '/register',
  component: () => System.import('../pages/register')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'userCenter',
  path: '/userCenter',
  component: () => System.import('../pages/userCenter')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'userInfo',
  path: '/userInfo',
  component: () => System.import('../pages/userInfo')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'userWorkInfo',
  path: '/userWorkInfo',
  component: () => System.import('../pages/userWorkInfo')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'userJoin',
  path: '/userJoin',
  component: () => System.import('../pages/userJoin')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'applyHistory',
  path: '/applyHistory',
  component: () => System.import('../pages/applyHistory')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'latestJob',
  path: '/latestJob',
  component: () => System.import('../pages/latestJob')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'jobDetail',
  path: '/jobDetail',
  component: () => System.import('../pages/jobDetail')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'latestWorker',
  path: '/latestWorker',
  component: () => System.import('../pages/latestWorker')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'workerDetail',
  path: '/workerDetail',
  component: () => System.import('../pages/workerDetail')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'teamCenter',
  path: '/teamCenter',
  component: () => System.import('../pages/teamCenter')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'teamInfo',
  path: '/teamInfo',
  component: () => System.import('../pages/teamInfo')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'findWorker',
  path: '/findWorker',
  component: () => System.import('../pages/findWorker')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'manageWorker',
  path: '/manageWorker',
  component: () => System.import('../pages/manageWorker')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'teamRefresh',
  path: '/teamRefresh',
  component: () => System.import('../pages/teamRefresh')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'companyCenter',
  path: '/companyCenter',
  component: () => System.import('../pages/companyCenter')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'companyInfo',
  path: '/companyInfo',
  component: () => System.import('../pages/companyInfo')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'purchaseList',
  path: '/purchaseList',
  component: () => System.import('../pages/purchaseList')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'purchaseDetail',
  path: '/purchaseDetail',
  component: () => System.import('../pages/purchaseDetail')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'manageTeam',
  path: '/manageTeam',
  component: () => System.import('../pages/manageTeam')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'companyInterview',
  path: '/companyInterview',
  component: () => System.import('../pages/companyInterview')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'companyRecommend',
  path: '/companyRecommend',
  component: () => System.import('../pages/companyRecommend')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'companyRecommendInfo',
  path: '/companyRecommendInfo',
  component: () => System.import('../pages/companyRecommendInfo')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'latestTeam',
  path: '/latestTeam',
  component: () => System.import('../pages/latestTeam')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'teamDetail',
  path: '/teamDetail',
  component: () => System.import('../pages/teamDetail')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'findTeam',
  path: '/findTeam',
  component: () => System.import('../pages/findTeam')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'findJob',
  path: '/findJob',
  component: () => System.import('../pages/findJob')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'messageCenter',
  path: '/messageCenter',
  component: () => System.import('../pages/messageCenter')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'systemMsg',
  path: '/systemMsg',
  component: () => System.import('../pages/systemMsg')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: 'inviteMsg',
  path: '/inviteMsg',
  component: () => System.import('../pages/inviteMsg')
    // component: resolve => require.ensure([], () => resolve(require('../pages/dashboard')), 'dashboard')
}, {
  name: '404',
  path: '*',
  component: () => System.import('../pages/404')
    // component: resolve => require.ensure([], () => resolve(require('../pages/404')), '404')
}]
