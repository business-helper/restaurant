import layout_routes from './layout'

const routes = [
    {
        path: '/',
        component: resolve => require(['restaurant_src/layout'], resolve),
        children: layout_routes
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['restaurant_pages/login'], resolve),
        meta: {
            title: "Login",
        }

    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['restaurant_pages/register'], resolve),
        meta: {
            title: "register",
        }
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: resolve => require(['restaurant_pages/forgotpassword'], resolve),
        meta: {
            title: "Forgot Password",
        }
    }, {
        path: '/reset_password/:token',
        name: 'reset_password_token',
        component: resolve => require(['restaurant_pages/reset_password'], resolve),
        meta: {
            title: "Reset Password",
        }
    },
    {
        path: '/lockscreen',
        component: resolve => require(['restaurant_pages/lockscreen'], resolve),
        meta: {
            title: "Lockscreen",
        }
    },
    {
        path: '/500',
        component: resolve => require(['restaurant_pages/500'], resolve),
        meta: {
            title: "500",
        }
    },
    {
        path: '*',
        component: resolve => require(['restaurant_pages/404'], resolve),
        meta: {
            title: "404",
        }
    }
]
export default routes
