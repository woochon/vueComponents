<template>
    <div id="alertBox" v-show="showAlert">
        <div class="boxWrap">
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
            我是一些内容；
        </div>
        <div class="boxContent">
            <span class="icon-home2" @click="chose"></span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'alertBox',
  data () {
    return {
      showAlert: true
    };
  },
  methods: {
    close () {
      this.showAlert = false;
    }
  }
};
</script>
<style scoped lang="scss" type="text/scss">
    #alertBox{
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:100;
        background:rgb(7,17,27);
        .boxWrap{
            position: absolute;
            top:0;
            left:0;
            right:0;
            bottom:50px;
            overflow-y: scroll;
            z-index:200;
            opacity: 1;
            color:#fff;
        }
        .boxContent{
            position: fixed;
            width:100%;
            height:50px;
            line-height:50px;
            left:0;
            bottom:0;
            text-align: center;
            z-index:200;
            .icon-home2{
                color: #fff;
                text-align: center;
            }
        }
    }
</style>
