<template>
  <div class="poetry">

    poetry

    <poetry2>{{a}}</poetry2>
  </div>

</template>

<script>
    import poetry2 from './poetry2'
    import Qs from 'qs';
    export default{
        name: 'poetry',
        data() {
          return{
            a:"aaa"
          }
        },
        components:{
            poetry2
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
