<template>
    <div id="partingLine">
        <span class="content " :style="lineStyle">{{message}}</span>
        <div class="line borderOne" :style="{top:fontSize*1.5/2+'px'}"></div>
    </div>
</template>
<script>
import '../../commen/css/index.scss';
export default {
  name: 'partingLine',
  data () {
    return {
      lineStyle: {
        fontSize: this.fontSize + 'px',
        lineHeight: this.fontSize * 1.5 + 'px'
      }
    };
  },
  methods: {

  },
  computed: {

  },
  props: {
    message: {
      type: String,
      default: '我是分割线'
    },
    fontSize: {
      type: Number,
      default: 20
    }
  }
};
</script>
<style scoped lang="scss" type="text/scss">
    /*@import '../../commen/css/index.scss';*/
    #partingLine{
        margin:0 auto;
        width:90%;
        position:relative;
        text-align:center;
        user-select:none;
        .content{
            text-align: center;
            z-index:1;
            position: relative;
            padding:0 12px;
            background-color: #fff;
        }
        .line{
            position: absolute;
            width:100%;
            left:0;
        }
    }
</style>
<!--
    难点：怎么将传进来的字体大小，通过样式是分割先垂直居中
    使用 v-bind:style这种方式实现样式的设置
-->
