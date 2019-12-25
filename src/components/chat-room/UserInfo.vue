<template>
  <div class="userinfo">
    <div class="header">详细信息</div>
    <div class="content">
      <img :src="img" />
      <p class="username">{{username}}</p>
      <button class="btnAddUser" v-on:click="AddUser()">添加好友</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "UserInfo",
  props: ["img", "username", "id"],
  data: () => {
    return {
      img: this.img,
      username: this.username,
      id: this.id
    };
  },
  methods: {
    getToken() {
      return this.$store.getters.token;
    },
    AddUser() {
      axios.defaults.headers.common["token"] = this.getToken();
      if (this.inputText === "") {
        alert("请输入用户");
        return;
      }
      axios
        .post("http://localhost:9501/post", { user_id: this.id })
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.userinfo {
  .header {
    height: 50px;
    line-height: 50px;
    text-emphasis-color: black;
    border-bottom: dotted 1px black;
    vertical-align: middle;
  }

  .content {
    img {
      margin-top: 80px;
      height: 100px;
      width: 100px;
      display: inline-block;
    }

    .username {
      margin-top: 30px;
      display: block;
      height: 22px;
      font-size: 20px;
    }

    .btnAddUser {
      margin-top: 130px;
      height: 40px;
      width: 200px;
      color: white;
      background-color: green;
    }
  }
}
</style>
