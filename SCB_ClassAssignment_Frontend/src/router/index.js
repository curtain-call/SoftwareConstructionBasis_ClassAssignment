import { createRouter, createWebHistory } from 'vue-router'
import Parser from '../views/ResumeParser/index.vue'
import Login from '../views/Login/index.vue'
import Homepage from '../views/Homepage/index.vue'
import Register from '../views/Register/index.vue'
import ForgetPassword from '../views/ForgetPassword/index.vue'
import Layout from '../layout/index.vue'

export const asyncRoutes = {}

export const constantRoutes = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    {
      path: '/',
      redirect: '/homepage',
      component: Layout,
      children: [
        {
          path: 'homepage',
          name: 'Homepage',
          component: Homepage,
          meta: { title: '首页', icon: 'el-icon-data-board' }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      hidden: true
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: ForgetPassword,
      hidden: true
    },
    /*
      需要经由权限验证而展现的页面
    */
    {
      path: '/resume-parser',
      name: 'resume-parser',
      redirect: '/resume-parser',
      component: Layout,
      children: [{
        path: '/resume-parser',
        component: () => import('../views/ResumeParser/index.vue'),
        name: 'parser-details',
        meta: { title: '简历详情', icon: 'el-icon-document' }
      }]
    },
    {
      path: '/resume-parser:id',
      name: 'resume-parser:id',
      component: Layout,
      children: [{
        path: '/resume-parser:id',
        component: () => import('../views/ResumeParser/previewAndAlter.vue'),
        name: 'parser-details-id',
        meta: { title: '个人简历详情', icon: 'el-icon-document' }
      }],
      hidden: true
    },
    {
      path: '/job-info',
      name: 'job-info',
      redirect: '/job-info',
      component: Layout,
      children: [{
        path: '/job-info',
        name: 'job--info-details',
        component: () => import('../views/Jobinfo/index.vue'),
        meta: { title: '人岗匹配', icon: 'el-icon-document' }
      }]
    },
    {
      path: '/job-info:id',
      name: 'job-info-id',
      component: Layout,
      children: [{
        path: '/job-info:id',
        component: () => import('../views/Jobinfo/jobDetails.vue'),
        meta: { title: '人岗匹配', icon: 'el-icon-document' }
      }],
      hidden: true
    },
    {

    }
    // 错误路由重定向
    // { path: '*', redirect: '/404', hidden: true }
  ]
}

const router = createRouter(constantRoutes)

export default router
