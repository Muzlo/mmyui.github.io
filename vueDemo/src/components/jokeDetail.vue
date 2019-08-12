<template>
  <div class="jokeDetail">

    <video :src="videoSrc" controls="controls" autoplay="autoplay">
        您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
    export default{
        name: 'jokeDetail',
        data() {
          return{
            videoSrc:""
          }
        },
        created(){
            this.videoSrc=this.$route.params.videoSrc;
        },

        mounted(){

        },
        methods: {

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    video
        display:block;
        margin:15px auto;
        max-width:90%;
        max-height:90%;
</style>
