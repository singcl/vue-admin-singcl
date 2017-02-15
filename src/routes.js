
import Login from 'views/Login'
import Home from 'views/Home'
import NotFound from 'views/404'

import HomeDefault from 'views/home/index'

import Forms from 'views/home/forms/index'
import Page1 from 'views/home/forms/Page1'

import Page4 from 'views/home/ui/Page4'
import Page5 from 'views/home/ui/Page5'
import Page6 from 'views/home/table/Page6'

let routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {},
    },
    {
        path: '/404',
        component: NotFound,
        name: 'not-found',
        meta: {},
    },
    {
    	path: '/',
    	component: Home,
        meta: {
            show: true,
        },
        children: [
            {
                path: '',
                name: 'home',
                component: HomeDefault,
                meta: {
                    //
                }
            },
            {
                path: 'forms',
                name: 'forms',
                component: Forms,
                meta: {
                    //
                },
                children: [
                    {
                        path:'page1',
                        name: 'page1',
                        component: Page1,
                    }
                ]
            },
            {
                path: 'ui',
                name: 'ui',
                meta: {},
                children: [
                    {
                        path:'page4',
                        name: 'page4',
                        component: Page4,
                    },
                    {
                        path:'page5',
                        name: 'page5',
                        component: Page5,
                    }
                ]
            },
            {
                path: 'table',
                name: 'table',
                meta: {},
                children: [
                    {
                        path:'page6',
                        name: 'page6',
                        component: Page6,
                    }
                ]
            },
        ]
    },
    {
        path: '*',
        meta: {},
        redirect: { path: '/' }
    }
];

export default routes;