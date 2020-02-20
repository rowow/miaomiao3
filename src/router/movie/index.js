export default{
    path : '/movie',
    component : ()=> import('@/views/Movie'),
    children : [
        {
            path : 'city', // 注：二级路由不需要添加‘/’
            component : ()=> import('@/components/City')
        },
        {
            path : 'comingsoon',
            component : ()=> import('@/components/ComingSoon')
        },
        {
            path : 'nowplaying',
            component : ()=> import('@/components/NowPlaying')
        },
        {
            path : 'search',
            component : ()=> import('@/components/Search')
        },
        {
            // 路由中的命名视图写法+动态路由
            path : 'detail/1/:movieId', // 拼接1是为了与commingsoon路由区分
            components : {
                // 设置默认路由是为了解决进入详情页时底部二级路由内容被清空的bug
                default : ()=> import('@/components/NowPlaying'),
                detail : ()=> import('@/views/Movie/detail')
            },
            // 视图命名中的动态路由传参
            props : {
                detail : true
            }
        },
        {
            // 路由中的命名视图写法+动态路由
            path : 'detail/2/:movieId',
            components : {
                // 设置默认路由是为了解决进入详情页时底部二级路由内容被清空的bug
                default : ()=> import('@/components/ComingSoon'),
                detail : ()=> import('@/views/Movie/detail')
            },
            // 视图命名中的动态路由传参
            props : {
                detail : true
            }
        },
        {
            // 二级路由重定向
            path : '/',
            redirect : '/movie/nowplaying'
        },
    ]
}