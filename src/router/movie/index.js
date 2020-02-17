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
            // 二级路由重定向
            path : '/',
            redirect : '/movie/nowplaying'
        },
    ]
}