<template>
    <div id="uploadImg">
        <a class="btn" @click="toggleShow">设置头像</a>
        <input type="file" v-show="false"  @change="handleChange"  ref="myfileinput">
        <my-upload field="img"
                   ref="myUpload"
                   @crop-success="cropSuccess"
                   @crop-upload-success="cropUploadSuccess"
                   @crop-upload-fail="cropUploadFail"
                   v-model="show"
                   :width="100"
                   :height="100"
                   url="/upload"
                   :params="params"
                   :headers="headers"
                   img-format="png"></my-upload>
        <img :src="imgDataUrl">
    </div>
</template>
<script>
import myUpload from 'vue-image-crop-upload';
export default{
  name: 'upoadImg',
  data () {
    return {
      show: false,
      params: {
        token: '123456798',
        name: 'avatar'
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: '' // the datebase64 url of created image
    };
  },
  components: {
    'my-upload': myUpload
  },
  methods: {
    toggleShow () {
      this.$refs.myfileinput.click();
    },
    handleChange (e) {
      e.preventDefault();
      console.log(e);
      console.log(this);
      console.log(this.$refs);
      console.log(this.$refs.myUpload);
      this.show = !this.show;
      if (this.loading !== 1) {
        console.log(this.loading);
          let files = e.target.files || e.dataTransfer.files; // eslint-disable-line
        console.log(files);
        if (this.$refs.myUpload.checkFile(files[0])) {
          this.$refs.myUpload.setSourceImg(files[0]);
        }
      }
    },
    /**
             * crop success
             *
             * [param] imgDataUrl
             * [param] field
             */
    cropSuccess (imgDataUrl, field) {
      console.log('-------- crop success --------');
      this.imgDataUrl = imgDataUrl;
    },
    /**
             * upload success
             *
             * [param] jsonData   服务器返回数据，已进行json转码
             * [param] field
             */
    cropUploadSuccess (jsonData, field) {
      console.log('-------- upload success --------');
      console.log(jsonData);
      console.log('field: ' + field);
    },
    /**
             * upload fail
             *
             * [param] status    server api return error status, like 500
             * [param] field
             */
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------');
      console.log(status);
      console.log('field: ' + field);
    }
  }
};
</script>
<style scoped>

</style>
