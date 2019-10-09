const menu_items = [
    {
        name: 'Dashboard',
        link: '/',
        icon: ' fas fa-home'
    },
    {
        name: "Restaurants",
        icon: "fas fa-users",
        child: [
            {
                name: 'Add Restaurant',
                link: '/add_restaurant',
                icon: 'fas fa-plus-square'
            },
            {
                name: 'Restaurant Lists',
                link: '/restaurant_list',
                icon: 'fas fa-list-ul'
            }
        ]
    },
    {
        name: "Settings",
        icon: "fas fa-cog",
        child:[
            {
                name: "Credit Card Setting",
                icon: "fas fa-angle-double-right",
                link: '/card_setting',
            },
            {
                name: "Sales Tax",
                icon: "fas fa-angle-double-right",
                link: '/sales_tax',
            },
            // {
            //     name: "Subscription Product",
            //     icon: "fas fa-angle-double-right",
            //     link: '/subscription_product',
            // },
            {
                name: "Subscription Plan",
                icon: "fas fa-angle-double-right",
                link: '/subscription_plan',
            },

        ]
    },

    // {
    //     name: "Food Categories",
    //     icon: "fa fa-tags",
    //     child: [
    //         {
    //             name: 'Add Category',
    //             link: '/add_category',
    //             icon: 'fa fa-plus-square'
    //
    //         },
    //         // {
    //         //     name: 'Edit Category',
    //         //     link: '/edit_category',
    //         //     icon: 'fa fa-edit'
    //         // },
    //         {
    //             name: 'Category Lists',
    //             link: '/category_list',
    //             icon: 'fa fa-list-ul'
    //
    //         }
    //     ]
    // },

    // {
    //     name: "Food Sizes",
    //     icon: "fas fa-weight",
    //     child: [
    //         {
    //             name: 'Add Size',
    //             link: '/add_size',
    //             icon: 'fas fa-plus-square'
    //         },
    //         {
    //             name: 'Size Lists',
    //             link: '/size_list',
    //             icon: 'fa fa-list-ul'
    //         }
    //     ]
    // },

    // {
    //     name: "Food Options",
    //     icon: "fas fa-weight-hanging",
    //     child: [
    //         {
    //             name: 'Add Option',
    //             link: '/add_option',
    //             icon: 'fas fa-plus-square'
    //
    //         },
    //         {
    //             name: 'Option Lists',
    //             link: '/option_list',
    //             icon: 'fa fa-list-ul'
    //         }
    //     ]
    // },






    // {
    //     name: 'Contacts',
    //     link: '/contacts',
    //     icon: ' fa fa-address-book-o'
    // },
    // {
    //     name: 'Tasks',
    //     link: '/tasks',
    //     icon: ' fa fa-list'
    // },
    // {
    //     name: 'E-Commerce',
    //     icon: 'fa fa-shopping-cart',
    //     child: [
    //         {
    //             name: 'E Dashboard',
    //             link: '/e_dashboard',
    //             icon: 'fa fa-angle-double-right'
    //         },
    //         {
    //             name: 'Cart Details',
    //             link: '/cart_details',
    //             icon: 'fa fa-angle-double-right'
    //         },
    //         {
    //             name: 'Product details',
    //             link: '/product_details',
    //             icon: 'fa fa-angle-double-right'
    //         },
    //         {
    //             name: 'Product Edit ',
    //             link: '/product_edit',
    //             icon: 'fa fa-angle-double-right'
    //         },
    //         {
    //             name: 'Product gallery ',
    //             link: '/product_gallery',
    //             icon: 'fa fa-angle-double-right'
    //         }
    //     ]
    //
    // },
    // {
    //     name: 'Forms',
    //     icon: 'fa fa-pencil-square-o',
    //     child: [
    //         {
    //             name: 'Form elements',
    //             link: '/form_elements',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Form validations',
    //             link: '/form_validations',
    //             icon: 'fa fa-angle-double-right'
    //         },
    //         {
    //             name: 'Form editors',
    //             link: '/form_editors',
    //             icon: 'fa fa-angle-double-right'
    //         },
    //         {
    //             name: 'Form wizards',
    //             link: '/form_wizards',
    //             icon: 'fa fa-angle-double-right'
    //         },
    //         {
    //             name: 'Dropdowns',
    //             link: '/dropdowns',
    //             icon: 'fa fa-angle-double-right'
    //         },
    //         {
    //             name: 'Radios & Checkboxes',
    //             link: '/radios_checkboxes',
    //             icon: 'fa fa-angle-double-right'
    //         }
    //     ]
    // },
    // {
    //     name: 'Typography',
    //     link: '/typography',
    //     icon: 'fa fa-text-height'
    // },
    // {
    //     name: 'API',
    //     link: '/api',
    //     icon: 'fa fa-clone'
    // },
    // {
    //     name: 'UI Components',
    //     title: ""
    // },
    // {
    //     name: 'Components',
    //     icon: 'fa fa-globe',
    //     child: [
    //         {
    //             name: 'UI elements',
    //             link: '/ui_elements',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Cards',
    //             link: '/cards',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Buttons',
    //             link: '/buttons',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Vscroll',
    //             link: '/vscroll',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Chat',
    //             link: '/chat',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Modals',
    //             link: '/modals',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Vue-Datepicker',
    //             link: '/vue-datepicker',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Vue slider',
    //             link: '/vue-slider',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Notifications',
    //             link: '/notifications',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Timeline',
    //             link: '/timeline',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Transitions',
    //             link: '/transitions',
    //             icon: 'fa fa-angle-double-right'
    //
    //         }
    //     ]
    //
    // },
    // {
    //     name: ' Widgets',
    //     link: '/widgets',
    //     icon: 'fa fa-sticky-note-o'
    // },
    // {
    //     name: 'Calendar', // <span class="badge-success badge pull-right">{{this.$store.state.cal_events.length}}</span>
    //     link: '/calendar',
    //     icon: 'fa fa-calendar'
    // },
    // {
    //     name: 'Charts',
    //     title: ""
    // },
    // {
    //     name: ' Charts',
    //     icon: 'fa fa-bar-chart',
    //     child: [
    //         {
    //             name: 'Chartist charts',
    //             link: '/chartist',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Frappe Charts',
    //             link: '/frappe-charts',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Echarts - Line',
    //             link: '/e_linecharts',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Echarts - Bar',
    //             link: '/e_barcharts',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Echarts - Pie',
    //             link: '/e_piecharts',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Vue Trend/Bar',
    //             link: '/trend_bar',
    //             icon: 'fa fa-angle-double-right'
    //
    //         }
    //     ]
    //
    // },
    // {
    //     name: 'Tables',
    //     icon: 'fa fa-table',
    //     child: [
    //         {
    //             name: 'Simple tables',
    //             link: '/simple_tables',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Advanced tables',
    //             link: '/advanced_tables',
    //             icon: 'fa fa-angle-double-right'
    //
    //         }
    //     ]
    //
    // },
    // {
    //     name: 'Files & Gallery',
    //     title: ""
    // },
    // {
    //     name: "Files",
    //     icon: "fa fa-file-o",
    //     child: [
    //         {
    //             name: 'Multi file upload',
    //             link: '/multi_file_upload',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Vue dropzone',
    //             link: '/vue_dropzone',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Gallery',
    //             link: '/gallery',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Vue Draggable',
    //             link: '/vue_draggable',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Image Cropper',
    //             link: '/image_cropper',
    //             icon: 'fa fa-angle-double-right'
    //
    //         }]
    //
    // },
    // {
    //     name: 'Maps',
    //     link: '/gmaps',
    //     icon: 'fa fa-map-marker'
    // },
    //
    // {
    //     name: 'Pages',
    //     title: ""
    // },
    // {
    //     name: "Pages",
    //     icon: "fa fa-files-o",
    //     child: [
    //         {
    //             name: 'Lockscreen',
    //             link: '/lockscreen',
    //             icon: 'fa fa-angle-double-right'
    //         }
    //     ]
    // },
    // {
    //     name: "Extra Pages",
    //     icon: "fa fa-files-o",
    //     child: [
    //         {
    //             name: 'Blank',
    //             link: '/blank',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Invoice',
    //             link: '/invoice',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Contact us',
    //             link: '/contact_us',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: 'Pricing',
    //             link: '/pricing',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: '404',
    //             link: '/404',
    //             icon: 'fa fa-angle-double-right'
    //
    //         },
    //         {
    //             name: '500',
    //             link: '/500',
    //             icon: 'fa fa-angle-double-right'
    //
    //         }
    //     ]
    // }




];
export default menu_items;
