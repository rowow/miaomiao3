module.exports =  {
    devServer : {
        proxy : {
            'api' : {
                target : 'http://39.97.33.178', // 目标
                changeOrigin : true    // 是否改变反向代理的地址
            }
        }
    }
}