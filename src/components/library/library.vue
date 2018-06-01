<template>
    <div id="library">
        <h3>书库</h3>
        <ul class="queryWrap">
            <li v-for="(item,index) in all"
                class="supItem"
                :key="index">
                <span class="condition">{{item.name}}:</span>
                <ul class="children">
                    <li v-for="(kind,base) in item.children"
                        class="subItem"
                        :key="base"
                    >
                        <span :class="{active:base==currentIndex[index]}"
                              @click="branchCondition(index,item.name,base,kind)"
                        >{{kind}}</span>
                    </li>
                </ul>
            </li>
            <li class="supItem" v-show="realQueryCondition.length!==0">
                <span class="condition">查询条件:</span>
                <ul class="children">
                    <li v-for="(query,key) in realQueryCondition"
                        class="subItem"
                        :key="key">
                        <span>{{query}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
  name: 'library',
  data () {
    return {
      all: [
        {
          name: '分类',
          children: [
            '全部', '悬疑', '历史',
            '军事', '玄幻', '奇幻',
            '仙侠', '科幻', '游戏',
            '同人', '社会', '古言'
          ]
        },
        {
          name: '出版状态',
          children: [
            '不限', '已出版', '未出版'
          ]
        },
        {
          name: '作品字数',
          children: [
            '不限', '30万以下',
            '30-50万', '50-100万', '100万以上'
          ]
        },
        {
          name: '排序方式',
          children: [
            '不限', '周人气', '月人气', '总人气',
            '推荐票', '字数'
          ]
        },
        {
          name: '更新时间',
          children: [
            '不限', '三日内', '七日内', '半月内', '一个月内'
          ]
        },
        {
          name: '是否免费',
          children: [
            '不限', '免费作品', '收费作品'
          ]
        },
        {
          name: '是否完结',
          children: [
            '不限', '已完结', '未完结'
          ]
        },
        {
          name: '红包',
          children: [
            '不限', '有红包', '没红包'
          ]
        }
      ],
      currentIndex: [0, 0, 0, 0, 0, 0, 0, 0],
      queryCondition: ['', '', '', '', '', '', '', '']
    };
  },
  computed: {
    realQueryCondition () {
      let result = [];
      this.queryCondition.forEach((item) => {
        if (item) {
          result.push(item);
        }
      });
      return result;
    }
  },
  methods: {
    branchCondition (index, condition, base, kind) {
      this.$nextTick(() => {
        this.$set(this.currentIndex, index, base);
        console.log(condition);
        this.$set(this.queryCondition, index, kind);
      });
    }
  }
};
</script>
<style scoped lang="scss" type="text/scss">
    #library{
        min-width: 1200px;
        max-width:1920px;
        margin: 0 auto;
        .queryWrap{
            width:1200px;
            height:800px;
            display: inline-block;
            font-size:0;
            .supItem{
                width:100%;
                height:53px;
                .condition{
                    display: inline-block;
                    width:80px;
                    height:53px;
                    line-height:53px;
                    text-align: left;
                    font-weight: 700;
                    font-size:14px;
                }
                .children{
                    display: inline-block;
                    .subItem{
                        display: inline-block;
                        height:53px;
                        line-height:53px;
                        text-align: center;
                        font-size:14px;
                        margin:0 12px;
                        span{
                            padding:4px 6px;
                            &.active{
                                 background-color: firebrick;
                             }
                        }
                    }
                }
            }
        }
    }
</style>

<!--
    难点：使用一维数组的方式来标记每个被点击之后的css样式的显示
    遇到的问题： 样式和选中的查询条件的数组改变，但是视图没有更新；
                 使用vue  set 的方式解决。
-->
