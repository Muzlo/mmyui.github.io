<template>
  <div class="index">
    <div class="topBar">
      <span class="logo">
        <img :src="srcUrl" />
      </span>
      <span class="searchIcon">
        <nut-icon  type="search" color="#fff" size="16px"></nut-icon>
      </span>
    </div>

    <div class="navBar">
      <div class="hor-panel">
        <nut-scroller>
          <div slot="list" class="nut-hor-list-item" v-for="(item, index) of listData" :key="index">
            <dl class="nut-scroller-item-info">
                <router-link tag="a" :to="item.r">{{item.t}}</router-link>
            </dl>
          </div>
        </nut-scroller>
      </div>
    </div>


        <transition :name="transitionName">
          <router-view  class="child-view"></router-view>
        </transition>


    <nut-backtop>
    </nut-backtop>
  </div>

</template>

<script>
    import Qs from 'qs';
    export default{
        name: 'index',
        data() {
          return{
              transitionName: '',
              srcUrl:require('../assets/img/index_logo.png'),
              listData: ["新闻","天气","图片","诗文","段子"],
              listData:[
                {
                  t:"新闻",
                  r:"news"
                },
                {
                  t:"视频",
                  r:"joke"
                },
                {
                  t:"美女",
                  r:"pic"
                },

                {
                  t:"音乐",
                  r:"music"
                }

              ]
          }
        },
        mounted(){
          document.querySelector(".nut-scroller-item-info").childNodes[0].className += 'router-link-exact-active router-link-active'
        },
        methods: {

        },
        watch:{
          $route(to, from,next) {
            if(to.name != 'news'){
              document.querySelector(".nut-scroller-item-info").childNodes[0].className = ''
            }

            if(to.meta.index && from.meta.index){
              if (to.meta.index > from.meta.index) {
                this.transitionName = 'slide-left'
              } else {
                this.transitionName = 'slide-right'
              }
            }else{
              this.transitionName = ''
            }
          }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .topBar
    padding:10px 30px;
    background:#d43d3d;
    position:relative;
    color:#fff;
    text-align:center;
    height:26px;
    line-height:26px;
    .logo
      width:80px;
      height:26px;
      line-height: 0;
      display:inline-block;
      overflow:hidden;
      position: relative;
      top:-6px;
      img
        width:100%;
        height:auto;
    .searchIcon
      position:absolute;
      right:30px;
      top: 15px;
  .navBar
    background:#f4f5f6;
    font-size:.26rem;
    padding:10px;
    .nut-hor-list-item
      width:80px;
      text-align:center;
      .nut-scroller-item-info
        .router-link-exact-active.router-link-active
          color:red;
          font-weight:700;

  @keyframes slideInLeft
    from
      transform: translate3d(100%, 0, 0);
      position: fixed;
      top: 79px;
      left: 0;
      opacity: 1;

    to
      transform: translate3d(0, 0, 0);
      position: fixed;
      top: 79px;
      left: 0;
      opacity: 1;


  @keyframes slideInRight
    from
      transform: translate3d(0%, 0, 0);
      position: fixed;
      top: 79px;
      left: 0;
      opacity: 1;

    to
      transform: translate3d(-100%, 0, 0);
      position: fixed;
      top: 79px;
      left: 0;
      opacity: 1;


  .slide-left-enter-active
    position: fixed;
    top: 79px;
    left: 0%;
    width: 100vw;
    height: 100vh;
    animation: slideInLeft .2s linear forwards;

  .slide-left-leave-active
    position: fixed;
    top: 79px;
    left: 0%;
    width: 100vw;
    height: 100vh;
    animation: slideInRight .2s linear forwards;

  /*向右滑动*/
  @keyframes slideOutLeft
    from
      transform: translate3d(-100%, 0, 0);
      position: fixed;
      top: 79px;
      left: 0;
      opacity: 1;

    to
      transform: translate3d(0%, 0, 0);
      position: fixed;
      top: 79px;
      left: 0;
      opacity: 1;


  @keyframes slideOutRight
    from
      transform: translate3d(0%, 0, 0);
      position: fixed;
      top: 79px;
      left: 0;
      opacity: 1;

    to
      transform: translate3d(100%, 0, 0);
      position: fixed;
      top: 79px;
      left: 0;
      opacity: 1;


  .slide-right-enter-active
    position: fixed;
    top: 79px;
    left: 0%;
    width: 100vw;
    height: 100vh;
    animation: slideOutLeft .2s linear forwards;

  .slide-right-leave-active
    position: fixed;
    top: 79px;
    left: 0%;
    width: 100vw;
    height: 100vh;
    animation: slideOutRight .2s linear forwards;



</style>
