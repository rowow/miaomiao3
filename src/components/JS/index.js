// 引入所需
import Vue from 'vue'
import MessageBox from './MessageBox'

// 导出
export var messageBox = (function(){    // 定义一个messageBox为闭包
    var defaults = {    // 初始默认值
        title : '',
        content : '',
        cancel : '',
        comfirm : '',
        handleCancel : null,
        handleComfirm : null
    }

    return (opts)=>{     // 配置参数
        for(var attr in opts){
            defaults[attr] = opts[attr];
        }

        var MyComponent = Vue.extend(MessageBox)    // 绑定MessageBox返回一个新类

        var vm = new MyComponent({
            el : document.createElement('div'),
            data : { // 数据    
                title : defaults.title,
                content : defaults.content,
                cancel : defaults.cancel,
                comfirm : defaults.comfirm
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this)   // 判断该方法存在，bind()获取vm对象
                    document.body.removeChild(vm.$el)                                // 删除
                },
                handleComfirm(){
                    defaults.handleComfirm && defaults.handleComfirm.call(this)
                    document.body.removeChild(vm.$el)
                }
            }
        })

        document.body.appendChild( vm.$el ) // 添加到body

    }
})();
