<template>
  <div class="input-text">
    <textarea placeholder="请输入文字" v-model="inputData"></textarea>
    <button class="send" type="button" v-on:click="sendMessage">发送</button>
  </div>
</template>
<script>
export default {
  name: "InputText",
  props: ["friend"],
  data() {
    return {
      inputData: ""
    };
  },
  methods: {
    getToken() {
      return this.$store.getters.token;
    },
    sendMessage() {
      this.$ChatService
        .post("post", {
          user_id: this.friend.id,
          message: this.inputData
        })
        .then(response => {
          if (response.status === 200) {
            this.$store.commit("setChatRecordsBySelf", {
              friendId: this.friend.id,
              message: this.inputData
            });
            this.inputData = "";
          }
        })
        .catch(error => {
          alert("发送失败", error);
        });
    }
  }
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
