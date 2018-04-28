import Vue from 'vue'
import Router from 'vue-router'
import PageBase from '@/components/page_base'
import Index from '@/page/index'
import MobileModel from '@/page/model/mobile'

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
                    name: 'index',
                    path: 'index',
                    component: Index,
                    children: [
                        {
                            name: 'mobile',
                            path: 'm',
                            component: MobileModel,

                        }
                    ]
                }
            ]
        }
    ]
})
