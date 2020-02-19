const state = {
    // 如果本地有当前定位地址和Id就获取，没有就设为北京和id:1
    nm : window.localStorage.getItem('nowNm') || '北京',
    id : window.localStorage.getItem('nowId') || 1
}

const actions = {

}

const mutations = {
    // 方法名需大写
    CITY_INFO(state,payload){
        state.nm = payload.nm
        state.id = payload.id
    }
}


export default {
    namespaced : true,
    state,
    actions,
    mutations
}