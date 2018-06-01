<template>
  <div class="hello">
    <Page :totalItem="totalItem"
          :showSelect="showSelect"
          :showAll="showAll"
          showElevator
          @on-change="changePage"></Page>
    <!--<upload-img></upload-img>-->
    <!--<span class="icon-camera"></span>-->
    <!--<button @click="alertSome">弹框组件</button>
    <div class="navigator borderOne"></div>
    <div id="alertBox" v-show="show">
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
        我是一些内容；
        我是一些内容；
      </div>
      <div class="boxContent">
        <span class="icon-home2" @click="chose"></span>
      </div>
    </div>
    <partingLine message="分割线" :fontSize="fontSize"></partingLine>-->
    <rating></rating>
    <!--<star :size="36" :score="2.5"></star>-->
    <library></library>
  </div>
</template>

<script>
import Page from './page/Page.vue';
import uploadImg from './uploadImg/uploadImg.vue';
/* import alertBox from './alertBox/alertBox.vue'; */
import partingLine from './partingLine/partingLine.vue';
import rating from './rating/rating.vue';
import star from './star/star.vue';
import library from './library/library.vue';

export default {
  name: 'HelloWorld',
  data () {
    return {
      showAll: true,
      totalItem: 567,
      showSelect: true,
      showElevator: true,
      show: false,
      fontSize: 16
    };
  },
  methods: {
    changePage (data) {
      console.log(data);
    },
    alertSome () {
      this.show = true;
    },
    chose () {
      this.show = false;
    }

  },
  components: {
    Page,
    uploadImg,
    partingLine,
    rating,
    star,
    library
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icon-camera{
  font-size:45px;
}
.navigator{
  width:100%;
  height:40px;
}
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
