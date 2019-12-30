<template>
  <div>
    <div class="curtain">
      <div class="curtain-bgs">
        <div v-for="item in list" :key="item.url">
          <img :src="item.url" :height="item.height" :width="item.width" class="curtain-bg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Curtain",
  data() {
    return {
      list: []
    };
  },

  methods: {
    processImg() {
      for (let i = 0; i < this.list.length; i++) {
        let itme = this.list[i];
        let top = Math.random() * 740;
        let duration = Math.random() * 4 + 6;
        let opacity = Math.random();

        let element = document.getElementsByClassName("curtain-bg")[i];
        element.style.width = itme.width;
        element.style.height = itme.height;
        element.style.top = top + "px";
        element.style.animationIterationCount = "infinite";
        element.style.animationDuration = duration + "s";
        element.style.opacity = opacity;
      }
    }
  },

  mounted() {
    this.$CommonService.post("get_home_img").then(response => {
      if (response.status === 200) {
        response.data.list.forEach(item => {
          let wh = Math.random();
          wh = 60 + wh * 40;
          this.list.push({
            url: item,
            height: wh + "px",
            width: wh + "px"
          });
        });
      }
    });
  },

  updated() {
    this.processImg();
  }
};
</script>

<style lang="stylus" scoped>
.curtain {
  overflow: hidden;
  margin: auto;
  position: relative;
  height: 760px;
  width: 1000px;
  box-shadow: 0px 3px 16px -5px #070707;

  .curtain-bgs {
    .curtain-bg {
      position: absolute;
      z-index: 9;
      border-radius: 1000px;
      animation-name: bgImg;
    }
  }
}

@keyframes bgImg {
  0% {
    left: 1000px;
  }

  100% {
    left: -80px;
  }
}
</style>
