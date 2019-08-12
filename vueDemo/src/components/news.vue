<template>
  <div class="news">
    <div class="newsList" v-for="(item,index) of newsList">
        <nut-cell :isLink="true" :linkUrl="item.path" :title="item.title" :subTitle="item.passtime" ></nut-cell>
        <a class="newsImage" :href="item.path"><img :src="item.image" /></a>
    </div>

  </div>
</template>

<script>
    import Qs from 'qs';
    export default{
        name: 'news',
        data() {
          return{
            newsList:[],
            maxPages: 5,
            isUnMore: false,
            isLoading: false,
            page: 1,
            timers: null,
            loading :null
          }
        },
        created(){
            this.ajaxFn();

        },

        mounted(){
            var _this=this;
            window.onscroll=function (){
                _this.onscrollFn()
            }

        },
        methods: {
            ajaxFn(){
                var _this=this;

               _this.loading = this.$toast.loading('加载中...');
                let data={
                  page:_this.page,
                  count:10,
                };


                _this.axios({
                  method: 'post',
                  url: 'https://api.apiopen.top/getWangYiNews',
                  data: Qs.stringify(data)
                }).then(response => {
                  _this.loading.hide();
                  _this.newsList=_this.newsList.concat( response.data.result );
                  _this.page++;

                }).catch(error => {
                  _this.loading.hide();
                  this.$toast.fail('网络异常');
                })
            },
            onscrollFn(){
                var _this=this;
                //变量scrollTop是滚动条滚动时，距离顶部的距离
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                //变量windowHeight是可视区的高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                       //滚动条到底部的条件

                if(scrollHeight==scrollTop+windowHeight){
                    if (_this.page > _this.maxPages) {
                        _this.$toast.warn('没有新闻了');
                    } else {
                        clearTimeout(_this.timers);
                        _this.timers = setTimeout(() => {
                            _this.ajaxFn();
                        }, 300);
                    }

                }
            },
            destroyed(){
                window.removeEventListener('scroll', this.onscrollFn);//监听页面滚动事件
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    .newsList
        padding:5px 10px 0;
        display:flex;
        border-bottom: 1px solid #f6f6f6;
        position:relative;
        .nut-cell
            flex:5;
            background-image:none;
            padding:5px 5px 0 0;

        .newsImage
            flex:2;
            padding:5px 5px 0 0;
            img
                width:100%;




</style>
