<template>
  <div class="container-water-fall" id="pic">

    <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth" @loadmore="loadmore" :data="data">
      <template >
        <div class="cell-item" v-for="(item,index) in data">
          <img v-if="item.img" :lazy-src="item.img" :src="item.img" alt="加载错误"  @click="previewFn(item.img,item.id)" />
        </div>
      </template>
    </waterfall>
    <div class="mask" v-if="isShow" @click="previewFn2()">
      <img :src="srcUrl" alt="">
    </div>
  </div>
</template>

<script>
    import Qs from 'qs';
    export default{
        name: 'pic',
        data(){
            return{
                data:[],
                col:3,
                page:1,
                maxPages:15,
                timers: null,
                srcUrl:'',
                isShow:false
            }
        },
        computed:{
          itemWidth(){
                return (138*0.88*(document.documentElement.clientWidth/375))
          },
          gutterWidth(){
                return (9*0.5*(document.documentElement.clientWidth/375))
          }
        },
        methods:{
          loadmore(index){
                var _this=this;
                if (_this.page > _this.maxPages) {
                    _this.$toast.warn('没有图片了');
                } else {
                    clearTimeout(_this.timers);
                    _this.timers = setTimeout(() => {
                        _this.ajaxFn();
                    }, 300);
                }
          },
          ajaxFn(){
                var _this=this;
                _this.loading = this.$toast.loading('加载中...');
                let data={
                  page:_this.page,
                  count:30
                };
                _this.axios({
                  method: 'post',
                  url: 'https://api.apiopen.top/getImages',
                  data: Qs.stringify(data)
                }).then(response => {
                  _this.loading.hide();
                  _this.data=_this.data.concat( response.data.result );
                  _this.page++;
                }).catch(error => {
                  _this.loading.hide();
                  this.$toast.fail('网络异常');
                })
          },
          previewFn(e,id){
            this.isShow=!this.isShow;
            this.srcUrl=e;
          },
          previewFn2(){
            this.isShow=!this.isShow;
          }
        },
        created(){
            this.ajaxFn();
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .cell-item
        img
            width:100%;
    .mask
      position:fixed;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.8);
      transition:.6s;
      img
        position:absolute;
        top: 50%;
        left:50%;
        transition:.6s;
        transform:translate(-50%,-50%);
        max-width:80%;
        max-height:80%;

</style>
