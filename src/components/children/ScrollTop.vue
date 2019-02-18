<template>
    <div class="scroll-top">
        <div class="page-up" @click="scrollToTop" v-show="toTopShow">
            <i class="iconfont icon-icon--fanhuidingbu"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'scroll-top',
    data() {
        return {
            scrollTop: 0,
            toTopShow: false,
            timer: null
        }
    },
    methods: {
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.scrollTop = scrollTop;
            this.toTopShow = this.scrollTop > 400 ? true : false;
        },
        scrollToTop() {
            let iSpeed = 0;
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                iSpeed = Math.floor(-this.scrollTop / 5);
                document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + iSpeed;
                if (this.scrollTop <= 0) {
                    this.scrollTop = 0;
                    clearInterval(this.timer);
                }
            }, 30);

        }
    },
    mounted() {
        this.$nextTick(function () {
            window.addEventListener('scroll', this.handleScroll, true);
            window.addEventListener('mousewheel', ()=>clearInterval(this.timer), true);
            window.addEventListener('DOMMouseScroll', ()=>clearInterval(this.timer), true);
        });
    },
    destroyed() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
}
</script>


<style scoped lang="scss">
  .page-up {
      background-color: #fff;
      border: 2px solid #eee;
      position: fixed;
      right: 30px;
      bottom: 80px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      transition: .3s;
      box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
      z-index: 10;

      .icon-icon--fanhuidingbu {
          color: #333;
          display: block;
          line-height: 40px;
          text-align: center;
          font-size: 22px;
      }
  }
</style>