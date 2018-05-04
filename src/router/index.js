import Vue from 'vue'
import Router from 'vue-router'
import PageBase from '@/components/page_base'
import Index from '@/page/index'
import MobileModel from '@/page/model/mobile'
import PCModel from '@/page/model/pc'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'PageBase',
            component: PageBase,
            children: [
                {
                    path: '', redirect: 'index'
                },
                {
                    path: 'index',
                    name: 'index',
                    component: Index,
                    children: [
                        {
                            path: 'm',
                            name: 'mobile',
                            component: MobileModel,

                        },
                        {
                            path: 'pc',
                            name: 'pc',
                            component: PCModel,

                        }
                    ]
                }
            ]
        }
    ]
})
