const mix = require('laravel-mix');

const path = require('path');

// mix.setResourceRoot('/oder/');
mix.setResourceRoot('public');

mix.webpackConfig({
    resolve: {
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout',
            'src': path.resolve(__dirname, 'resources/assets/admin/'),
            'resources': path.resolve(__dirname, 'resources/assets/admin/'),
            'components': path.resolve(__dirname, 'resources/assets/admin/components/'),
            'pages': path.resolve(__dirname, 'resources/assets/admin/components/pages/'),
            'img': path.resolve(__dirname, 'resources/assets/admin/img/'),
            'common':path.resolve(__dirname, 'resources/assets/admin/common/'),

            'restaurant_masonry': 'masonry-layout',
            'restaurant_isotope': 'isotope-layout',
            'restaurant_src': path.resolve(__dirname, 'resources/assets/restaurant/'),
            'restaurant_resources': path.resolve(__dirname, 'resources/assets/restaurant/'),
            'restaurant_components': path.resolve(__dirname, 'resources/assets/restaurant/components/'),
            'restaurant_pages': path.resolve(__dirname, 'resources/assets/restaurant/components/pages/'),
            'restaurant_img': path.resolve(__dirname, 'resources/assets/restaurant/img/'),
        }
    },
    output: {
        publicPath:'./public/',
        chunkFilename: mix.inProduction() ? 'js/[name].[chunkhash].js' : 'js/[name].js'
    }
});


mix.options({
    postCss: [
        require('autoprefixer')(),
        // require('postcss-rtl')()
    ]
})


mix.js('resources/assets/customer/js/app.js', 'public/')
    .js('resources/assets/admin/main.js', 'public/')
    .js('resources/assets/restaurant/restaurant.js', 'public/')
    .extract(['vue', 'bootstrap-vue', 'animejs', 'axios', 'vue-echarts-v3/src/full.js','vue2-dropzone'])
    .sass('resources/assets/customer/sass/app.scss', 'public/css/customer/customer.css')
    .sass('resources/assets/admin/sass/custom.scss', 'public/css/admin/');
;

