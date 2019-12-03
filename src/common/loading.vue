//loading效果组件

<template>
  <div class="loading-wrip" :style="{marginTop: marginTop? marginTop : '50%'}">
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: ["marginTop"]
};
</script>

<style lang="stylus" scoped>
.loading-wrip {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  top: -50px;
  transform: scale(0.5);

  .span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #67e7d5;
    position: absolute;
    animation: load 1.04s ease infinite;
  }

  .span:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -10px;
    animation-delay: 0.13s;
  }

  .span:nth-child(2) {
    left: 14px;
    top: 14px;
    animation-delay: 0.26s;
  }

  .span:nth-child(3) {
    left: 50%;
    top: 0;
    margin-left: -10px;
    animation-delay: 0.39s;
  }

  .span:nth-child(4) {
    top: 14px;
    right: 14px;
    animation-delay: 0.52s;
  }

  .span:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -10px;
    animation-delay: 0.65s;
  }

  .span:nth-child(6) {
    right: 14px;
    bottom: 14px;
    animation-delay: 0.78s;
  }

  .span:nth-child(7) {
    bottom: 0;
    left: 50%;
    margin-left: -10px;
    animation-delay: 0.91s;
  }

  .span:nth-child(8) {
    bottom: 14px;
    left: 14px;
    animation-delay: 1.04s;
  }
}

@keyframes load {
  0% {
    transform: scale(1.2);
    opacity: 1;
  }

  100% {
    transform: scale(0.3);
    opacity: 0.5;
  }
}
</style>
