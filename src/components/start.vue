<template>
    <div id="start">
        <div class="start-wrap">
            <span :class="du"></span>
        </div>
    </div>
</template>
<script>


export default{
  name: 'start',
  data () {
    return {

    };
  },
  props: {
    rating: {
      type: Number,
      default: 3.6
    },
    fontSize: {
      type: Number,
      default: 12
    }
  },
  computed: {
    read () {
      let tmpData = Math.floor(this.rating * 2) / 2;
      return tmpData;
    }
  }
};
</script>
<style scoped lang="scss" type="text/scss">
    #start{
        width:100%;
        height: 34px;
        background-color: gray;
        .start-wrap{

        }
    }
</style>
