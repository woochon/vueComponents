<template>
    <div id="goods">
        <div class="top-header">头部</div>
        <div class="middle-content">
            <div class="menuWrap">
                <ul>
                    <li v-for="(item,index) in goods.list"
                        class="item"
                        :key="index">
                        <img :src="item.imgSrc" alt="" v-show="item.imgSrc">
                        <span>{{item.value}}</span>
                    </li>
                </ul>
            </div>
            <div class="goodsWrap"></div>
        </div>
        <div class="bottom-car">购物车</div>
    </div>
</template>
<script>
export default{
  name: 'Index',
  data () {
    return {
      goods: {
        list: {
          imgSrc: '',
          goodsName: '皮蛋瘦肉粥'
        }
      }
    };
  }
};
</script>
<style scoped lang="scss" type="text/scss">
    #goods{
        .top-header{
            width:100%;
            height:174px;
            text-align: center;
        }
        .middle-content{
            position: absolute;
            top:174px;
            bottom:40px;
            left: 0;
            right: 0;
            display: flex;
            .menuWrap{
                flex:0 0 80px;
                background-color: #f3f5f7;
                .item{
                    width:100%;
                    height:50px;
                    line-height:50px;
                    text-align: center;
                    font-size:0;
                    img{
                        vertical-align: top;
                    }
                    span{
                        font-size:24px;
                    }
                }
            }
        }
        .bottom-car{
            position: absolute;
            left: 0;
            bottom:0;
            height: 40px;
            width:100%;
        }
    }
</style>
