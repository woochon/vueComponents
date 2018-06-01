<template>
    <div id="start">
        <div :class="starType">
            <span v-for="(itemClass,index) in itemClasses"
                  :class="itemClass"
                  class="starItem"
                  :key="index">
            </span>
        </div>
    </div>
</template>
<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default{
  name: 'start',
  data () {
    return {

    };
  },
  props: {
    score: {
      type: Number,
      default: 3.6
    },
    size: {
      type: Number,
      default: 24
    }

  },
  computed: {
    starType () {
      return 'star-' + this.size;
    },
    itemClasses () {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i += 1) {
        result.push(CLS_ON);
      }
      let semi = score % 1 !== 0;
      if (semi) {
        result.push(CLS_HALF);
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF);
      }
      return result;
    }
  }
};
</script>
<style scoped lang="scss" type="text/scss">
    #start{
        width:100%;
        .star-24{
            font-size:0;
            width:120px;
            height:24px;
            background-color: lightblue;
            .starItem{
                display: inline-block;
                width:24px;
                height:24px;
                &.on{
                    background-color: green;
                }
                &.half{
                    background-color: yellow;
                }
                &.off{
                    background-color: red;
                }
            }
        }
        .star-36{
            font-size:0;
            width:180px;
            height:36px;
            background-color: lightblue;
            .starItem{
                display: inline-block;
                width:36px;
                height:36px;
                &.on{
                    background-color: green;
                }
                &.half{
                    background-color: yellow;
                }
                &.off{
                    background-color: red;
                }
            }
        }
        .star-48{
            font-size:0;
            width:240px;
            height: 48px;
            background-color: lightblue;
            .starItem{
                display: inline-block;
                width:48px;
                height:48px;
                &.on{
                    background-color: green;
                }
                &.half{
                    background-color: yellow;
                }
                &.off{
                    background-color: red;
                }
            }
        }
    }
</style>
<!--
  难点：没有想到采用计算属性返回数组的形式，然后循环遍历数组，类名绑定数组的这种方式
  注意：span元素设置宽高的时候，一定要使它为 inline-block元素

-->
