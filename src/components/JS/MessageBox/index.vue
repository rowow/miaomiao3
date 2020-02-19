<template>
  <div class="messageBox">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <div>
          <div @touchstart="handleCancel">{{ cancel }}</div>
          <div @touchstart="handleComfirm">{{ comfirm }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'MessageBox'
}
</script>

<style scoped>
.messageBox{width: 200px;height: 120px;background: white;border: 1px solid #ccc;border-radius: 4px;position: absolute;left: 50%;top: 50%;margin: -60px 0 0 -100px;box-shadow: 3px 3px 3px 3px #ccc}
.messageBox h2,p{text-align: center;line-height: 40px;}
.messageBox h2{font-size: 18px;}
.messageBox >div{width: 100%;display: flex;position: absolute;bottom: 0;border-top: 1px solid #ccc;}
.messageBox >div div{flex: 1;text-align: center;line-height: 30px;border-right: 1px solid #ccc;}
.messageBox >div div:last-child{border: none;}
</style>