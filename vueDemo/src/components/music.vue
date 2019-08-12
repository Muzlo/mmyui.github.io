<template>
  <div class="musicBroadcasting">
        <div class="searchIpt" @click="linkTo">
            <nut-searchbar
                placeText="搜索歌曲" :hasSearchButton="false"
            ></nut-searchbar>
        </div>

        <div class="musicBroadcastingList">
            <div class="box-item">
                <div class="nut-row">
                    <div class="nut-col nut-col-8 nut-col-offset-0" v-for="(item,index) of musicBroadcastingList.slice(0,6)" v-if="item.thumb">

                        <div class="flex-content" @click="musicDetailFn(item.ch_name)">
                            <img width="100%" :src="item.thumb" />
                            <p class="text-c">{{item.name}}</p>
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
        name: 'musicBroadcasting',
        data() {
          return{
            musicBroadcastingList:[],
          }
        },
        created(){
            this.ajaxFn();
        },
        mounted(){

        },
        methods: {
            musicDetailFn(ch_name){
               this.$router.push({
                    name:"musicDetail",
                    params:{
                       ch_name: ch_name
                    }
                })
            },
            linkTo(){
                this.$router.push({
                    name:"musicSearch"
                })
            },
            ajaxFn(){
                var _this=this;
                _this.loading = this.$toast.loading('加载中...');
                let data={};
                _this.axios({
                  method: 'post',
                  url: 'https://api.apiopen.top/musicBroadcasting',
                  data: Qs.stringify(data)
                }).then(response => {
                  _this.loading.hide();
                  _this.musicBroadcastingList=response.data.result[0].channellist;
                }).catch(error => {
                  _this.loading.hide();
                  this.$toast.fail('网络异常');
                })
            },
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


</style>
