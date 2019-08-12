<template>
  <div class="music">

    <div class="searchIpt">
        <nut-searchbar
            placeText="请输入歌名"
            @submit="submitFun"
        ></nut-searchbar>
    </div>

    <div class="musicList">

        <div class="li" v-for="(item,index) of musicList">
            <nut-row>
                <nut-col :span="5">
                    <div class="flex-content leftPic">
                        <img width="100%" :src="item.pic" alt="">
                    </div>
                </nut-col>
                <nut-col :span="13">
                    <div class="flex-content flex-content-light rightText">
                        <p class="p1">{{item.title}}</p>
                        <p class="p2">{{item.author}}</p>
                    </div>
                </nut-col>
                <nut-col :span="6" class="musicBtn">
                    <span class="off" @click="musicOnOff($event)"></span>
                </nut-col>
            </nut-row>
            <audio @ended="audioEndFn($event)" class="audio" :src="item.url" controls="controls"></audio>
        </div>

    </div>


  </div>

</template>

<script>
    import Qs from 'qs';
    export default{
        name: 'musicSearch',
        data() {
          return{
            musicName:"",
            musicList:[],
          }
        },
        created(){

        },
        mounted(){

        },
        methods: {
            audioEndFn(obj){
                $(obj.target).prev().find("img").removeClass("imgAnimate");
                $(obj.target).prev().find("span.on").removeClass("on").addClass('off')
            },
            hasClass(elem, cls){
                  cls = cls || '';
                  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
                  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
            },
            musicOnOff(obj){
                var _this=this;
                if(_this.hasClass(obj.target,'on')){
                    if(_this.hasClass(obj.target,'on')){
                        obj.target.className="off";
                        $(obj.target).parents('.nut-row').next().get(0).pause();
                        $(obj.target).parents('.nut-row').find("img").removeClass('imgAnimate');
                    }
                }else{
                    $(".musicBtn>span").addClass('off').removeClass('on');
                    $(".leftPic img").removeClass('imgAnimate');
                    var len=document.getElementsByTagName("audio").length;
                    for( let i=0;i<len;i++){
                        $("audio").get(i).pause();
                    }
                    if(_this.hasClass(obj.target,'on')){
                        obj.target.className="off";
                        $(obj.target).parents('.nut-row').next().get(0).pause();
                        $(obj.target).parents('.nut-row').find("img").removeClass('imgAnimate');
                    }else if(_this.hasClass(obj.target,'off')){
                        obj.target.className="on";
                        $(obj.target).parents('.nut-row').next().get(0).play();
                        $(obj.target).parents('.nut-row').find("img").addClass('imgAnimate');
                    }
                }

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
                    if(response.data.code==200){
                        this.musicList=response.data.result
                    }
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
            .li
                margin-bottom:10px;
                .nut-row
                    display:flex;
                    background:#f4f4f4;
                    padding:8px;
                    position:relative;
                    .leftPic
                        img
                            border-radius:50%;
                            border:2px solid #fff;
                            width:60px;
                            height:60px;
                        .imgAnimate
                            animation:rotate 10s linear infinite;
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
                        span
                            width:40px;
                            height:40px;
                            display:block;
                            margin:0 auto;
                        .on
                            background:url("../assets/img/on.png") no-repeat center;
                            background-size: contain;
                        .off
                            background:url("../assets/img/off.png") no-repeat center;
                            background-size: contain;
                .audio
                    display:none;


    @keyframes rotate
        from
            transform: rotate(0);
        to
            transform: rotate(360deg);



</style>
