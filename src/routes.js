
import Login from 'views/Login'
import Home from 'views/Home'
import NotFound from 'views/404'

import DashboardV1 from 'views/home/dashboard-v1'
import Page1 from 'views/home/dashboard-v1/nav1/Page1'
import Page4 from 'views/home/dashboard-v1/nav2/Page4'
import Page5 from 'views/home/dashboard-v1/nav2/Page5'
import Page6 from 'views/home/dashboard-v1/nav3/Page6'

let routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: 'not-found',
        hidden: true
    },
    {
    	path: '/home',
    	component: Home,
    	name: 'home',
    	children: [
            {
                path:'dashboard-v1',
                name: 'nav1',
                component: DashboardV1,
                children: [
                    {
                        path:'page1',
                        name: 'page1',
                        component: Page1,
                    },   
                ]
            },
            {
                path:'dashboard-v1',
                name: 'nav2',
                component: DashboardV1,
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
                path:'dashboard-v1',
                name: 'nav3',
                component: DashboardV1,
                children: [
                    {
                        path:'page6',
                        name: 'page6',
                        component: Page6,
                    },
                    
                ]
            },
    	]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;