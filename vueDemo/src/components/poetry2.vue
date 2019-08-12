<template>
  <div class="poetry2">

poetry2222
    <slot></slot>
  </div>

</template>

<script>
    import Qs from 'qs';
    export default{
        name: 'poetry',
        data() {
          return{
          }
        },
        // created(){
        //     let data={
        //       page:1,
        //       count:5
        //     };

        //     this.axios({
        //       method: 'post',
        //       url: 'https://api.apiopen.top/getWangYiNews',
        //       data: Qs.stringify(data)
        //     }).then(response => {
        //       console.log(response.data);
        //     }).catch(error => {
        //       console.log('网络异常');
        //     })
        // },
        mounted(){

        },
        methods: {
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
