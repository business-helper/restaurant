const layout = [
    {
        path: 'add_restaurant',
        component: resolve => require(['pages/add_restaurant'], resolve),
        meta: {
            title: "Add Restaurant",
        }
    },
    {
        path: 'restaurant_list',
        component: resolve => require(['pages/restaurant_list'], resolve),
        meta: {
            title: "Restaurant List",
        }
    },
    {
        path: 'delete_restaurant/:employee_id',
        component: resolve => require(['pages/restaurant_list'], resolve),
        meta: {
            title: "Restaurant List",
        }
    },
    {
        path: 'edit_restaurant/:restaurant_id',
        component: resolve => require(['pages/add_restaurant'], resolve),
        meta: {
            title: "Edit Restaurant",
        }
    },
    {
        path: 'add_category/:restaurant_id',
        component: resolve => require(['restaurant_pages/add_food_category'], resolve),
        meta: {
            title: "Add Category",
        }
    },
    {
        path: 'category_list/:restaurant_id',
        component: resolve => require(['restaurant_pages/food_category_list'], resolve),
        meta: {
            title: "Category List",
        }
    },
    {
        path: 'edit_category/:category_id/:restaurant_id',
        component: resolve => require(['restaurant_pages/add_food_category'], resolve),
        meta: {
            title: "Edit Category",
        }
    },


    {
        path: 'add_size/:restaurant_id',
        component: resolve => require(['restaurant_pages/add_size'], resolve),
        meta: {
            title: "Add Food Size Option",
        }
    },
    {
        path: 'edit_size/:size_id/:restaurant_id',
        component: resolve => require(['restaurant_pages/edit_size'], resolve),
        meta: {
            title: "Edit Food Size",
        }
    },
    {
        path: 'size_list/:restaurant_id',
        component: resolve => require(['restaurant_pages/size_list'], resolve),
        meta: {
            title: "Food Size List",
        }
    },

    {
        path: 'add_option/:restaurant_id',
        component: resolve => require(['restaurant_pages/add_option'], resolve),
        meta: {
            title: "Add Option",
        }
    },
    {
        path: 'option_list/:restaurant_id',
        component: resolve => require(['restaurant_pages/option_list'], resolve),
        meta: {
            title: "Option List",
        }
    },
    {
        path: 'edit_option/:option_id/:restaurant_id',
        component: resolve => require(['restaurant_pages/edit_option'], resolve),
        meta: {
            title: "Edit Option",
        }
    },
    {
        path: 'add_menu/:restaurant_id',
        component: resolve => require(['restaurant_pages/add_food_menu'], resolve),
        meta: {
            title: "Add Food Menu",
        }
    },
    {
        path: 'edit_menu/:menu_id/:restaurant_id',
        // component: resolve => require(['pages/edit_food_menu'], resolve),
        component: resolve => require(['restaurant_pages/add_food_menu'], resolve),
        meta: {
            title: "Edit Food Menu",
        }
    },

    {
        path: 'menu_list/:restaurant_id',
        component: resolve => require(['restaurant_pages/food_menu_list'], resolve),
        meta: {
            title: "Food Menu List",
        }
    },
    {
        path:'card_setting',
        component: resolve => require(['pages/card_setting'], resolve),
        meta: {
            title: "Credit Card Setting",
        }
    },
    {
        path:'sales_tax',
        component: resolve => require(['pages/sales_tax'], resolve),
        meta: {
            title: "Sales Tax Setting",
        }
    },

    {
        path: '/',
        name: 'dashboard',
        component: resolve => require(['pages/dashboard'], resolve),
        meta: {
            title: "Dashboard",
        }
    },
    {
        path: '/subscription_plan',
        name: 'Subscription Plans',
        component: resolve => require(['pages/subscription_plan'], resolve),
        meta: {
            title: "Subscription Plans",
        }
    },
    {
        path: '/subscription_product',
        name: 'Subscription Products',
        component: resolve => require(['pages/subscription_product'], resolve),
        meta: {
            title: "Subscription Products",
        }
    },
    {
        path: '/opening_hours/:restaurant_id',
        name: 'Opening Hours',
        component: resolve => require(['restaurant_pages/opening_hours'], resolve),
        meta: {
            title: "Subscription Products",
        }
    },
    {
        path: '/logo/:restaurant_id',
        name: 'Logo',
        component: resolve => require(['restaurant_pages/logo'], resolve),
        meta: {
            title: "Logo",
        }
    },












    {
        path: '/index2',
        component: resolve => require(['pages/index2'], resolve),
        meta: {
            title: "Dashboard2",
        }

    },
    // {
    //     path: '/product_details',
    //     component: resolve => require(['pages/e-commerce/product_details'], resolve),
    //     meta: {
    //         title: "Product details",
    //     }
    // },
    {
        path: '/product_edit',
        component: resolve => require(['pages/e-commerce/product_edit'], resolve),
        meta: {
            title: "Product Edit",
        }

    },
    {
        path: '/e_dashboard',
        component: resolve => require(['pages/e-commerce/e_dashboard'], resolve),
        meta: {
            title: "E dashboard",
        }
    },
    {
        path: '/cart_details',
        component: resolve => require(['pages/e-commerce/cart_details'], resolve),
        meta: {
            title: "Cart Details",
        }
    },
    {
        path: '/product_gallery',
        component: resolve => require(['pages/e-commerce/product_gallery'], resolve),
        meta: {
            title: "Product gallery",
        }
    },
    {
        path: 'form_elements',
        component: resolve => require(['pages/form_elements'], resolve),
        meta: {
            title: "Form Elements",
        }
    },
    {
        path: 'form_wizards',
        component: resolve => require(['pages/form_wizards'], resolve),
        meta: {
            title: "Form Wizards",
        }

    },
    {
        path: 'form_validations',
        component: resolve => require(['pages/form_validations'], resolve),
        meta: {
            title: " Form Validations",
        }
    },
    {
        path: 'dropdowns',
        component: resolve => require(['pages/dropdowns'], resolve),
        meta: {
            title: " Dropdowns",
        }
    },
    {
        path: 'cards',
        component: resolve => require(['pages/card'], resolve),
        meta: {
            title: " Cards",
        }
    },
    {
        path: 'buttons',
        component: resolve => require(['pages/buttons'], resolve),
        meta: {
            title: "Buttons",
        }
    },
    {
        path: 'radios_checkboxes',
        component: resolve => require(['pages/radios_checkboxes'], resolve),
        meta: {
            title: " Radios & Checkboxes",
        }
    },
    {
        path: 'vue-datepicker',
        component: resolve => require(['pages/vue-datepicker'], resolve),
        meta: {
            title: " Datepickers",
        }
    },
    {
        path: 'form_editors',
        component: resolve => require(['pages/form_editors'], resolve),
        meta: {
            title: " Form Editors",
        }
    },
    {
        path: 'notifications',
        component: resolve => require(['pages/notifications'], resolve),
        meta: {
            title: " Notifications",
        }
    },
    {
        path: 'modals',
        component: resolve => require(['pages/modals'], resolve),
        meta: {
            title: " Modals",
        }
    },
    {
        path: 'vscroll',
        component: resolve => require(['pages/vscroll'], resolve),
        meta: {
            title: " Vscroll",
        }
    },
    {
        path: 'vue-slider',
        component: resolve => require(['pages/vue_slider'], resolve),
        meta: {
            title: " Vue Slider",
        }
    },
    {
        path: 'ui_elements',
        component: resolve => require(['pages/ui_elements'], resolve),
        meta: {
            title: " UI Elements",
        }
    },
    {
        path: 'typography',
        component: resolve => require(['pages/typography'], resolve),
        meta: {
            title: "Typography",
        }
    },
    {
        path: 'api',
        component: resolve => require(['pages/api'], resolve),
        meta: {
            title: "API",
        }
    },
    {
        path: 'timeline',
        component: resolve => require(['pages/timeline'], resolve),
        meta: {
            title: "Timeline",
        }
    },
    {
        path: 'chat',
        component: resolve => require(['pages/chat'], resolve),
        meta: {
            title: "Chat",
        }
    },
    {
        path: 'calendar',
        component: resolve => require(['pages/calendar'], resolve),
        meta: {
            title: "Calendar",
        }
    },
    {
        path: 'simple_tables',
        component: resolve => require(['pages/simple_tables'], resolve),
        meta: {
            title: "Simple Tables",
        }
    },
    {
        path: 'advanced_tables',
        component: resolve => require(['pages/advanced_tables'], resolve),
        meta: {
            title: "Advanced Tables",
        }
    },
    {
        path: 'widgets',
        component: resolve => require(['pages/widgets'], resolve),
        meta: {
            title: "Widgets",
        }
    },
    {
        path: 'chartist',
        component: resolve => require(['pages/chartist'], resolve),
        meta: {
            title: "Chartist Charts",
        }
    },
    {
        path: 'frappe-charts',
        component: resolve => require(['pages/frappe_charts'], resolve),
        meta: {
            title: "Frappe Charts",
        }
    },
    {
        path: 'e_linecharts',
        component: resolve => require(['pages/e_linecharts'], resolve),
        meta: {
            title: "Echarts - Line",
        }
    },
    {
        path: 'e_barcharts',
        component: resolve => require(['pages/e_barcharts'], resolve),
        meta: {
            title: "Echarts - Bar",
        }
    },
    {
        path: 'e_piecharts',
        component: resolve => require(['pages/e_piecharts'], resolve),
        meta: {
            title: "Echarts - Pie",
        }
    },
    {
        path: 'trend_bar',
        component: resolve => require(['pages/trend_bar'], resolve),
        meta: {
            title: "Vue Trend/Bar charts",
        }
    },
    {
        path: 'gmaps',
        component: resolve => require(['pages/gmaps'], resolve),
        meta: {
            title: "Maps",
        }
    },
    {
        path: 'gallery',
        component: resolve => require(['pages/gallery'], resolve),
        meta: {
            title: "Gallery",
        }
    },
    {
        path: 'vue_draggable',
        component: resolve => require(['pages/vue_draggable'], resolve),
        meta: {
            title: "Vue Draggable",
        }
    },
    {
        path: 'image_cropper',
        component: resolve => require(['pages/image_cropper'], resolve),
        meta: {
            title: "Image Cropper",
        }
    },
    {
        path: 'multi_file_upload',
        component: resolve => require(['pages/multi_file_upload'], resolve),
        meta: {
            title: "Multi File Upload",
        }
    }
    ,
    // {
    // path: 'vue_dropzone',
    // component: resolve => require(['pages/vue-dropzone'], resolve),
    // meta: {
    //     title: "Vue Dropzone",
    // }
    //
    // },

    {
        path: 'view_user/:user_id',
        component: resolve => require(['pages/view_user'], resolve),
        meta: {
            title: "View User",
        }
    },
    {
        path: 'edit_user_dashboard/:user_id',
        name: 'edit_user_dashboard',
        component: resolve => require(['pages/edit_restaurant'], resolve),
        meta: {
            title: "Edit User",
        }
    },
    {
        path: 'view_user_dashboard/:user_id',
        name: 'view_user_dashboard',
        component: resolve => require(['pages/view_user'], resolve),
        meta: {
            title: "View User",
        }
    },
    {
        path: 'view_user_api/:user_id',
        name: 'view_user_api',
        component: resolve => require(['pages/view_user'], resolve),
        meta: {
            title: "View User",
        }
    },
    {
        path: 'blank',
        component: resolve => require(['pages/blank'], resolve),
        meta: {
            title: "Blank",
        }
    },
    {
        path: 'transitions',
        component: resolve => require(['pages/transitions'], resolve),
        meta: {
            title: "Transitions",
        }
    },
    {
        path: 'invoice',
        component: resolve => require(['pages/invoice'], resolve),
        meta: {
            title: "Invoice",
        }
    },
    {
        path: 'contact_us',
        component: resolve => require(['pages/contact_us'], resolve),
        meta: {
            title: "Contact Us",
        }
    },
    {
        path: 'Pricing',
        component: resolve => require(['pages/pricing'], resolve),
        meta: {
            title: "Pricing",
        }
    },
    {
        path: 'contacts',
        component: resolve => require(['pages/contacts'], resolve),
        meta: {
            title: "Contacts",
        }
    },
    {
        path: 'tasks',
        component: resolve => require(['pages/tasks'], resolve),
        meta: {
            title: "Tasks",
        }
    }]


    export default layout
