<template>

  <div class="musicBroadcasting">
    <div class="musicBroadcastingList">
        <div class="box-item">
            <div class="nut-row">
                <div class="nut-col nut-col-6 nut-col-offset-0" v-for="(item,index) of musicList" v-if="item.thumb">
                    <div class="flex-content" @click="linkTo(item.songid)">
                        <img width="100%" :src="item.thumb" />
                        <p>{{item.title}}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>


</template>

<script>
    import Qs from 'qs';
    export default{
        name: 'musicDetail',
        data() {
          return{
            musicList:[]
          }
        },
        created(){
            var channel_name=this.$route.params.ch_name || this.$store.state.channelname;
            this.$store.commit('channelnameFn',channel_name);
            let data={
              channelname:this.$route.params.ch_name || this.$store.state.channelname
            };
            this.axios({
              method: 'post',
              url: 'https://api.apiopen.top/musicBroadcastingDetails',
              data: Qs.stringify(data)
            }).then(response => {
                if(response.data.code==200){
                    if(response.data.result.songlist.length>0){
                        this.musicList=response.data.result.songlist;
                    }else{
                        this.$toast.text('暂无数据');
                        this.$router.go(-1);
                    }

                }
            }).catch(error => {
              this.$toast.warn('网络异常');
            })


        },
        mounted(){

        },
        methods: {
            linkTo(songid){
                this.$router.push({
                    name:"musicDetails",
                    params:{
                       songid: songid
                    }
                })
            }

        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .musicBroadcasting
        font-size:.24rem;
        .searchIpt
            width:90%;
            margin:15px auto 30px;
        .musicBroadcastingList
            width:90%;
            margin:0px auto 30px;
            .title
                font-size:14px;
                font-weight:700;
                text-indent: 4px;
                margin-bottom:4px;
                color:#333;
            .flex-content
                padding:5px;
                p
                    margin-top:6px;
                    height: 30px;
                    line-height: 20px;


</style>