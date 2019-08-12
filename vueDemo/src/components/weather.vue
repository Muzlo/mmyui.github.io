<template>
  <div class="music">

    <div class="searchIpt">
        <nut-searchbar
            placeText="请输入歌名"
            @submit="submitFun"
        ></nut-searchbar>
    </div>

    <div class="musicList">
{{onOff}}
        <div class="li">
            <nut-row>
                <nut-col :span="5">
                    <div class="flex-content leftPic">
                        <img width="100%" src="http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=300x300" alt="">
                    </div>
                </nut-col>
                <nut-col :span="13">
                    <div class="flex-content flex-content-light rightText">
                        <p class="p1">不要说话</p>
                        <p class="p2">陈奕迅 - 不要说话不要说话不要说话不要说话不要说话不要说话</p>
                    </div>
                </nut-col>
                <nut-col :span="6">
                    <span class="off" @click="musicOnOff($event)"></span>
                    <audio src="http://music.163.com/song/media/outer/url?id=25906124.mp3" controls="controls"></audio>
                </nut-col>
            </nut-row>

        </div>


        <div class="li">
            <nut-row>
                <nut-col :span="5">
                    <div class="flex-content leftPic">
                        <img width="100%" src="http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=300x300" alt="">
                    </div>
                </nut-col>
                <nut-col :span="13">
                    <div class="flex-content flex-content-light rightText">
                        <p class="p1">不要说话</p>
                        <p class="p2">陈奕迅 - 不要说话不要说话不要说话不要说话不要说话不要说话</p>
                    </div>
                </nut-col>
                <nut-col :span="6">
                    <span class="off" @click="musicOnOff($event)"></span>
                    <audio src="http://music.163.com/song/media/outer/url?id=25906124.mp3" controls="controls"></audio>
                </nut-col>
            </nut-row>

        </div>


        <div class="li">
            <nut-row>
                <nut-col :span="5">
                    <div class="flex-content leftPic">
                        <img width="100%" src="http://p1.music.126.net/96L4ojVi9N3tdHk3r3GXjQ==/109951163066640079.jpg?param=300x300" alt="">
                    </div>
                </nut-col>
                <nut-col :span="13">
                    <div class="flex-content flex-content-light rightText">
                        <p class="p1">不要说话</p>
                        <p class="p2">陈奕迅 - 不要说话不要说话不要说话不要说话不要说话不要说话</p>
                    </div>
                </nut-col>
                <nut-col :span="6">
                    <span class="off" @click="musicOnOff($event)"></span>
                    <audio src="http://music.163.com/song/media/outer/url?id=25906124.mp3" controls="controls"></audio>
                </nut-col>
            </nut-row>

        </div>



    </div>


  </div>

</template>

<script>
    import Qs from 'qs';
    export default{
        name: 'weather',
        data() {
          return{
            musicName:"",
            musicList:[],
            onOff:true
          }
        },
        created(){

        },
        mounted(){

        },
        methods: {
            musicOnOff(obj){
                $("audio").get(0).pause();
                obj.onOff=this.onOff;
                if(obj.onOff){
                    obj.target.className="on";
                    $(obj.target).next().get(0).play();
                }else{
                    obj.target.className="off";
                    $(obj.target).next().get(0).pause();
                    this.onOff=false;
                }
                this.onOff=!obj.onOff;



            },
            submitFun(value){
                this.musicName=value.trim();
                let data={
                  name:this.musicName
                };

                this.axios({
                  method: 'post',
                  url: 'https://api.apiopen.top/searchMusic',
                  data: Qs.stringify(data)
                }).then(response => {

                }).catch(error => {
                  this.$toast.warn('网络异常');
                })

            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .music
        font-size:.24rem;
        .searchIpt
            width:90%;
            margin:15px auto;
        .musicList
            width:90%;
            margin:5px auto;
            .nut-row
                display:flex;
                background:#f4f4f4;
                padding:8px;
                position:relative;
                .leftPic
                    img
                        border-radius:4px;
                        border:1px solid #eee;
                .nut-col-13,.nut-col-6
                    display:flex;
                    overflow:hidden;
                    align-items: center;
                    .rightText
                        width:100%;
                        p
                            line-height:22px;
                            margin-left:15px;
                        .p1
                            font-size:14px;
                            font-weight:700;
                        .p2
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                .nut-col-6
                    .off
                        width:40px;
                        height:40px;
                        display:block;
                        margin:0 auto;
                        background:url("../assets/img/off.png") no-repeat center;
                        background-size: contain;
                    .on
                        width:40px;
                        height:40px;
                        display:block;
                        margin:0 auto;
                        background:url("../assets/img/on.png") no-repeat center;
                        background-size: contain;
                    audio
                        display:none;


</style>
