<template>
  <div class="input-text">
    <textarea placeholder="请输入文字"></textarea>
    <button class="send" type="button">发送</button>
  </div>
</template>
<script>
export default {
  name: "InputText"
};
</script>

<style lang="stylus" scoped>
.input-text {
  height: 25%;
  border-top: solid 1px #ddd;
  text-align: right;

  textarea {
    height: 70%;
    width: 100%;
    padding: 10px;
    border: none;
  }

  .send {
    height: 30px;
    width: 90px;
    margin-top: 5px;
  }
}</style>
