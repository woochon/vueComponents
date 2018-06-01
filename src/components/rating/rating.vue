<template>
    <div id="rating">
        <div class="ratingWrap">
            <div class="ratingKind">
                <div v-for="(value,index) in rateType"
                     :key="index" class="rateItem"
                     @click="choiceRateType(index)"
                     :class="{active:currentIndex==index}"
                >
                    {{value}}
                </div>
            </div>
            <div class="ratingSwitch" @click="showAll=!showAll">
                <img src="./offleft.png" alt="" v-show="showAll">
                <img src="./offright.png" alt="" v-show="!showAll">
                <span>显示有内容的评价</span>
            </div>
            <div class="ratingContent">
                <ul>
                    <li v-for="(item,index) in rateList"
                        :key="index"
                        v-show="rateList.length!==0">
                        <div>{{item.time | toTimestamp}}</div>
                        <span>{{item.userName}}</span>
                        <span>{{item.rating}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { ratingContent } from '../../commen/js/apiService';
import timestamp from '../../commen/js/timestamp.js';
export default{
  name: 'rating',
  data () {
    return {
      msg: 'rating',
      currentIndex: 0,
      showAll: true,
      rateList: []
    };
  },
  filters: {
    toTimestamp (data) {
      return timestamp(data, 'Y年m月d日');
    }
  },
  methods: {
    choiceRateType (data) {
      this.currentIndex = data;
    }
  },
  created () {
    ratingContent().then(
      res => {
        let tmp = res.data;
        console.log(typeof (tmp));
        console.log(tmp);
        if (tmp.code === 1) {
          this.$nextTick(() => {
            this.rateList = tmp.content;
          });
        }
      }
    ).catch();
  },
  props: {
    rateType: {
      type: Array,
      default: function () {
        return ['满意', '中肯', '否定'];
      }
    }
  }

};
</script>
<style scoped lang="scss" type="text/scss">
    #rating{
        width:100%;
        .ratingKind{
            display: flex;
            .rateItem{
                width:10%;
                min-width:50px;
                height:40px;
                line-height:40px;
                text-align: center;
                border-radius:5px;
                justify-content: flex-start;
                &:hover{
                    cursor: pointer;
                     background-color: lightcyan;
                }
                &.active{
                     background-color: lightblue;
                 }
            }
        }
        .ratingSwitch{
            img{
                vertical-align: top;
            }
        }
        .ratingContent{
            width:100%;
            padding:0 10px;
            li{
                border-bottom:1px solid gray;
            }
        }
    }
</style>
<!--
  引入的timestamp方法在javacript不能使用this.timestamp调用，
  在template中直接timestamp调用更是错误，
  解决方式：可以在filters中，用timestamp方式调用
-->
