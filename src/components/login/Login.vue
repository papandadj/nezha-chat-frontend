<template>
  <div>
    <div class="curtain">
      <Curtain></Curtain>
    </div>
    <div class="login" id="login">
      <div class="prompt-test">{{currentType == "login"?" Login":"Sign in"}}</div>

      <div class="input-text">
        <input
          type="text"
          placeholder="请输入账号"
          :class="'login-input' + (account==''?' login-input-empty':'')"
          v-model="account"
        />
        <input
          type="password"
          placeholder="密码"
          :class="'login-input' + (password==''?' login-input-empty':'')"
          v-model="password"
        />
        <button
          :class="'login-btn-empty' + (password!='' && account != ''?' login-btn':'')"
          @click="signinOrLogin()"
        >{{this.currentType=="login"?"登录":"注册"}}</button>
      </div>
      <loading v-if="loading" marginTop="-60px"></loading>
    </div>
    <div v-if="currentType=='login'" class="signup">
      没有账号？请
      <span class="signup-link" @click="handleSingupLink()">注册</span>
    </div>
    <div v-else class="signup">
      已有账号？ 请
      <span class="signup-link" @click="handleLoginLink()">登录</span>
    </div>
  </div>
</template>

<script>
import Loading from "common/loading.vue";
import Curtain from "../curtain/Curtain.vue";
const axios = require("axios");

export default {
  name: "Login",
  components: {
    Loading,
    Curtain
  },

  data() {
    return {
      currentType: "login",
      account: "",
      password: "",
      loading: false
    };
  },
  methods: {
    handleSingupLink() {
      this.currentType = "singup";
    },
    handleLoginLink() {
      this.currentType = "login";
    },
    signinOrLogin() {
      if (this.account !== "" && this.password !== "") {
        if (this.currentType === "singup") {
          this.singin();
        } else if (this.currentType === "login") {
          this.login();
        }
      } else {
        alert("账号跟密码不能为空");
      }
    },
    singin() {
      this.loading = true;
      axios
        .post("http://localhost:9500/sign_up", {
          username: this.account,
          password: this.password
        })
        .then(response => {
          if (response.status === 200) {
            alert("注册成功");
            this.currentType = "login";
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 409) {
            this.loading = false;
            alert("该用户以及注册过了");
          } else {
            alert(error);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    login() {
      this.loading = true;
      axios
        .post("http://localhost:9500/login", {
          username: this.account,
          password: this.password
        })
        .then(response => {
          if (response.status === 200) {
            let token = response.data.token;
            this.$store.commit("setToken", token);
            this.$router.push("/chat-room");
          }
        })
        .catch(error => {
          if (error.response.status === 401) {
            alert("用户账号或者密码错误");
          }
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style lang="stylus" scoped>
#body {
  overflow: hidden;
}

.login {
  overflow: hidden;
  position: fixed;
  top: 50%;
  right: 140px;
  left: 50%;
  margin: -350px 0 0 -250px;
  width: 500px;
  min-height: 555px;

  .prompt-test {
    height: 80px;
    margin: 120px auto 25px;
    text-align: center;
    color: red;
    font-weight: bold;
    font-size: 40px;
  }

  .input-text {
    background-position: -117px 0;

    .login-input {
      background: transparent;
      border: none;
      display: block;
      border-bottom: 2px solid red;
      padding: 0 15px;
      font-size: 13px;
      overflow: hidden;
      margin: 0 auto 15px;
      line-height: 48px;
      width: 375px;
      height: 48px;
    }

    .login-input:focus {
      outline: none;
    }

    .login-input-empty {
      background: transparent;
      border: none;
      border-bottom: 2px solid #ff0092;
    }

    .login-btn-empty {
      width: 375px;
      height: 48px;
      z-index: 8;
      background: #ff0092;
      padding: 0 20px;
      font-size: 13px;
      display: block;
      overflow: hidden;
      margin: 0 auto 15px;
      line-height: 48px;
      border-radius: 10px;
    }

    .login-btn {
      width: 375px;
      height: 48px;
      z-index: 8;
      background: red;
      padding: 0 20px;
      font-size: 13px;
      display: block;
      overflow: hidden;
      margin: 0 auto 15px;
      line-height: 48px;
      border-radius: 10px;
    }
  }
}

.signup {
  position: fixed;
  top: 75%;
  left: 50%;
  margin-left: 40px;

  .signup-link {
    margin-left: -3px;
    color: red;
    text-decoration: underline;
  }
}
</style>
