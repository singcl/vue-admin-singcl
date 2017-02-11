
import Login from 'views/Login'
import Home from 'views/Home'
import NotFound from 'views/404'

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
    	name: 'home'
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;