const layout = [
        {
            path: 'add_category',
            component: resolve => require(['restaurant_pages/add_food_category'], resolve),
            meta: {
                title: "Add Category",
            }
        },
        {
            path: 'category_list',
            component: resolve => require(['restaurant_pages/food_category_list'], resolve),
            meta: {
                title: "Category List",
            }
        },
        {
            path: 'edit_category/:category_id',
            component: resolve => require(['restaurant_pages/add_food_category'], resolve),
            meta: {
                title: "Edit Category",
            }
        },
        {
            path: 'add_size',
            component: resolve => require(['restaurant_pages/add_size'], resolve),
            meta: {
                title: "Add Food Size Option",
            }
        },
        {
            path: 'edit_size/:size_id',
            component: resolve => require(['restaurant_pages/edit_size'], resolve),
            meta: {
                title: "Edit Food Size",
            }
        },
        {
            path: 'size_list',
            component: resolve => require(['restaurant_pages/size_list'], resolve),
            meta: {
                title: "Food Size List",
            }
        },

        {
            path: 'add_option',
            component: resolve => require(['restaurant_pages/add_option'], resolve),
            meta: {
                title: "Add Option",
            }
        },
        {
            path: 'option_list',
            component: resolve => require(['restaurant_pages/option_list'], resolve),
            meta: {
                title: "Option List",
            }
        },
        {
            path: 'edit_option/:option_id',
            component: resolve => require(['restaurant_pages/edit_option'], resolve),
            meta: {
                title: "Edit Option",
            }
        },
        {
            path: 'add_menu',
            component: resolve => require(['restaurant_pages/add_food_menu'], resolve),
            meta: {
                title: "Add Food Menu",
            }
        },
        {
            path: 'edit_menu/:menu_id',
            // component: resolve => require(['pages/edit_food_menu'], resolve),
            component: resolve => require(['restaurant_pages/add_food_menu'], resolve),
            meta: {
                title: "Edit Food Menu",
            }
        },
        {
            path: 'menu_list',
            component: resolve => require(['restaurant_pages/food_menu_list'], resolve),
            meta: {
                title: "Food Menu List",
            }
        },
        {
            path:'card_setting',
            component: resolve => require(['restaurant_pages/card_setting'], resolve),
            meta: {
                title: "Credit Card Setting",
            }
        },
        {
            path:'sales_tax',
            component: resolve => require(['restaurant_pages/sales_tax'], resolve),
            meta: {
                title: "Sales Tax Setting",
            }
        },
        {
            path:'opening_hours',
            component: resolve => require(['restaurant_pages/opening_hours'], resolve),
            meta: {
                title: "Opening Hours",
            }
        },

        {
            path:'account',
            component: resolve => require(['restaurant_pages/account'], resolve),
            meta: {
                title: "Account Setting",
            }
        },
        {
            path:'delivery-setting',
            component: resolve => require(['restaurant_pages/delivery_setting'], resolve),
            meta: {
                title: "Delivery Setting",
            }
        },
        {
            path: '',
            name: 'dashboard',
            component: resolve => require(['restaurant_pages/dashboard'], resolve),
            meta: {
                title: "Dashboard",
            }
        },
        {
            path: 'orders/:order_status?',
            component: resolve => require(['restaurant_pages/order_list'], resolve),
            meta: {
                title: "Orders",
            }
        },
        {
            path: 'subscription',
            component: resolve => require(['restaurant_pages/subscription'], resolve),
            meta: {
                title: "Subscription",
            }
        },
        {
            path: 'subscription/checkout/:plan_id',
            component: resolve => require(['restaurant_pages/start_subscription'], resolve),
            meta: {
                title: "Start Subscription",
            }
        },
        {
            path: 'logo',
            component: resolve => require(['restaurant_pages/logo'], resolve),
            meta: {
                title: "Start Subscription",
            }
        }



    ]


    export default layout
