<template>
  <div class="city_body">
      <div class="city_list">
          <div class="city_hot">
              <h2>热门城市</h2>
              <ul class="clearfix">
                  <li v-for="(item,i) in hotLists" :key="i">{{item.nm}}</li>
              </ul>
          </div>
          <div class="city_sort" ref="city_sort">
              <div  v-for="(item,i) in cityLists" :key="i">
                  <h2>{{item.index}}</h2>
                  <ul>
                      <li v-for="(itemList,j) in item.list" :key="j">{{itemList.nm}}</li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="city_index">
          <ul>
              <li v-for="(item,i) in cityLists" :key="i" :class="letterColorNum==i?'active':''" @touchstart="handleToIndex(i)">{{item.index}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name : 'City',
    data(){
        return{
            hotLists:[],
            cityLists:[],
            letterColorNum:null
        }
    },
    mounted(){
        this.axios.get('/api/cityList').then((res)=>{
            var msg = res.data.msg
            if(msg === 'ok'){
                var cities = res.data.data.cities

                // 格式化城市列表
                // [{index : 'A',list:[{nm : '安徽', id : 12}]}]
                var { hotList,cityList } = this.formatCityList(cities);
                this.hotLists = hotList
                this.cityLists = cityList
            }
        })
    },
    methods:{
        formatCityList(cities){
            var cityList = [];
            var hotList = [];


            for(var i = 0;i < cities.length;i++){
                // 获取城市拼音的首字母并转换成大写
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if(cities[i].isHot===1){
                    hotList.push(cities[i])
                }
                if(toCompare(firstLetter)){ // 这里说明是新添加index
                    cityList.push({ index: firstLetter , list : [{ nm : cities[i].nm,id : cities[i].id }]})
                }
                else{   // 反之累加到已有的index中
                    for(var j = 0;j<cityList.length;j++){
                        // 如果相等就相当于该首字母存在，继续往其list存相应字母的数据
                        if(cityList[j].index === firstLetter){
                            cityList[j].list.push({nm:cities[i].nm,id:cities[i].id})
                        }
                    }
                }
            }
            

            // 对数据的首字母进行排序A->Z
            cityList.sort((n1,n2)=>{
                if(n1.index<n2.index){
                    return -1;
                }else if(n1.index>n2.index){
                    return 1;
                }else{
                    return 0;
                }
            })

            // 判断当前首字母是否存在
            function toCompare(firstLetter){
                for(var k = 0;k<cityList.length;k++){
                    if(cityList[k].index === firstLetter){
                        return false;
                    }
                }
                return true;
            }

            console.log(cityList);
            return {
                hotList,
                cityList
            }
        },
        handleToIndex(index){
            this.letterColorNum = index
            // 找到当前需要跳转的标签，将其parentNode的顶部滚动值设为当前的offsetTop
            var h2 = this.$refs.city_sort.getElementsByTagName('h2')
            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
        }
    }
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
.city_body .city_index .active{background: #e54847}
</style>