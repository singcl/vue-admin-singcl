
import Login from 'views/Login'
import Home from 'views/Home'
import NotFound from 'views/404'

import DashboardV1 from 'views/home/dashboard-v1'

let routes = [
    {
        path: '/login',
        component: Login,
        name: 'login',
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
	    		path:'',
	    		name: 'dashboard',
	    		component: DashboardV1,
	    	},
	    	{
	    		path:'dashboard-v1',
	    		name: 'dashboard-v1',
	    		component: DashboardV1,
	    	}
    	]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;