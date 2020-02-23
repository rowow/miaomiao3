export default{
    path : '/mine',
    component : ()=> import('@/views/Mine'), // 按需引入
    children : [
        {
            path : 'center',
            component : ()=> import('@/views/Mine/center')
        },
        {
            path : 'register',
            component : ()=> import('@/components/Register')
        },
        {
            path : 'findpassword',
            component : ()=> import('@/components/FindPassword')
        },
        {
            path : 'login',
            component : ()=> import('@/components/Login')
        },
        {
            path : '/',
            redirect : 'login'
        },
    ]
}