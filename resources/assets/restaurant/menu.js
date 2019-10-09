const menu_items = [
    {
        name: 'Dashboard',
        link: '/',
        icon: ' fas fa-home'
    },
    {
        name: "Food Menus",
        icon: "fas fa-hamburger",
        child: [
            {
                name: 'Add Menu',
                link: '/add_menu',
                icon: 'fas fa-plus-square'
            },
            {
                name: 'Menu Lists',
                link: '/menu_list',
                icon: 'fas fa-list-ul'
            },
            {
                name: 'Add Category',
                link: '/add_category',
                icon: 'fas fa-plus-square'
            },
            {
                name: 'Category Lists',
                link: '/category_list',
                icon: 'fas fa-list-ul'
            },
            {
                name: 'Add Size',
                link: '/add_size',
                icon: 'fas fa-plus-square'
            },
            {
                name: 'Size Lists',
                link: '/size_list',
                icon: 'fas fa-list-ul'
            },
            {
                name: 'Add Option',
                link: '/add_option',
                icon: 'fas fa-plus-square'
            },
            {
                name: 'Option Lists',
                link: '/option_list',
                icon: 'fas fa-list-ul'
            }
        ]
    },
    {
        name: "Orders",
        icon: "fas fa-shopping-cart",
        child: [
            {
                name: 'Ongoing Orders',
                link: '/orders/ongoing',
                // icon: 'fas fa-plus-square'
            },
            {
                name: 'Accepted Orders',
                link: '/orders/accepted',
                // icon: 'fas fa-plus-square'
            },
            {
                name: 'Preparing Orders',
                link: '/orders/preparing',
                // icon: 'fas fa-plus-square'
            },
            {
                name: 'Completed Orders',
                link: '/orders/completed',
                // icon: 'fas fa-plus-square'
            },
            {
                name: 'Closed Orders',
                link: '/orders/closed',
                // icon: 'fas fa-plus-square'
            },
            {
                name: 'Rejected Orders',
                link: '/orders/rejected',
                // icon: 'fas fa-plus-square'
            },
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
            {
                name: "Opening Hours",
                icon: "fas fa-angle-double-right",
                link: '/opening_hours',
            },
            {
                name:'Account Setting',
                link:'/account',
                icon:'fas fa-map-marker'
            },
            {
                name:'Delivery Setting',
                link:'/delivery-setting',
                icon:'fas fa-map-marker'
            },
            {

                name: "Logo",
                icon: "fas fa-angle-double-right",
                link: '/logo',
            },
        ]
    },
    {

        name: "Subscription",
        icon: "far fa-credit-card",
        link: '/subscription',
    },

];
export default menu_items;
