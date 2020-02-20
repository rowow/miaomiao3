<template>
  <div id="main">
    <Header title="喵喵电影" />
      <div id="content">
        <div class="movie_menu">
            <router-link tag="div" to="/movie/city" class="city_name">
                <!-- $store.state.City.nm：从City状态管理中获取nm  -->
                <span>{{ $store.state.City.nm }}</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <div class="hot_swtich">
                <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
                <router-link tag="div" to="/movie/comingsoon" class="hot_item">即将上映</router-link>
            </div>
            <router-link tag="div" to="/movie/search" class="search_entry">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
        </div>
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    <TabBar />
    <!-- detail的页面，该写法是路由中的命名视图 -->
    <router-view name="detail" />
  </div>
</template>

<script>

import Header from '@/components/Header'
import TabBar from '@/components/TabBar'

import { messageBox } from '@/components/JS'

export default {
  name : 'Movie',
  mounted(){

    // 延时请求弹出框
    setTimeout(()=>{
      this.axios.get('/api/getLocation').then((res)=>{
        var msg = res.data.msg
        if(msg === 'ok'){
          
          var nm = res.data.data.nm
          var id = res.data.data.id

          // 判断当前请求的id与vuex状态管理中的id
          if(this.$store.state.City.id == id) return

          // 弹框
          messageBox({
            title : '定位',
            content : nm,
            cancel : '取消',
            comfirm : '确定',
            handleCancel(){
              console.log(1);
            },
            handleComfirm(){
              // 存到本地，并重载页面
              window.localStorage.setItem('nowNm',nm)
              window.localStorage.setItem('nowId',id)
              window.location.reload()
            }
          })
        }
      })
    },2000)


    // messageBox({
    //   title : '定位',
    //   content : '北京',
    //   cancel : '取消',
    //   comfirm : '确定',
    //   handleCancel(){
    //     console.log(1);
    //   },
    //   handleComfirm(){
    //     console.log(2);
    //   }
    // })
  },
  components:{
    Header,TabBar
  }
}
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}

.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}

.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}

.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>