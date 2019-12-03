<template>
  <div>
    <div class="login" id="login">
      <div class="login-bg">
        <div class="login-nezha nezha1"></div>
        <div class="login-nezha nezha2"></div>
        <div class="login-nezha nezha3"></div>
        <div class="login-logo">welcome</div>
        <div class="login-prompt">{{this.currentType=="login"?"登录":"注册"}}</div>
      </div>

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
        <button class="login-btn" @click="signinOrLogin()">{{this.currentType=="login"?"登录":"注册"}}</button>
      </div>
      <loading v-if="loading" marginTop="-60px"></loading>
    </div>
    <div v-if="currentType=='login'" class="signup">
      没有账号？请
      <span class="signup-btn" @click="handleSingupLink()">注册</span>
    </div>
  </div>
</template>

<script>
import Loading from "common/loading.vue";
export default {
  name: "Login",
  components: {
    Loading
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
    signinOrLogin() {
      if (this.account !== "" && this.password !== "") {
        if (this.currentType === "singup") {
          this.singin();
        } else if (this.currentType === "login") {
          this.login();
        }
      } else {
        alert("请输入账号密码");
      }
    },
    singin() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.currentType = "login";
      }, 3000);
    },
    login() {
      console.log("into log in");
      this.$router.push("/chat-room");
    }
  },
  watch: {},
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.login {
  position: fixed;
  overflow: hidden;
  left: 50%;
  margin-left: -250px;
  top: 50%;
  margin-top: -350px;
  width: 500px;
  min-height: 555px;
  z-index: 10;
  right: 140px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 16px -5px #070707;

  .login-bg {
    background: url('./../../assets/login-bg.jpg');
    width: 100%;
    height: 312px;
    overflow: hidden;

    .nezha1 {
      top: 21px;
      left: -30px;
      transform: scale(0.6);
      animation: nezha1 20s infinite;
    }

    .nezha2 {
      top: 87px;
      right: 20px;
      animation: nezha2 19s infinite;
    }

    .nezha3 {
      top: 150px;
      left: -40px;
      transform: scale(0.8);
      animation: nezha3 21s infinite;
    }

    .login-nezha {
      background-image: url('./../../assets/login-cloud.png');
      width: 63px;
      height: 40px;
      position: absolute;
      z-index: 1;
    }

    .login-logo {
      height: 80px;
      margin: 120px auto 25px;
      text-align: center;
      color: #1fcab3;
      font-weight: bold;
      font-size: 40px;
    }

    .login-prompt {
      color: #57d4c3;
      font-size: 20px;
      text-align: center;
      margin: 0 auto;
    }

    .login-logo, .login-prompt {
      z-index: 2;
    }
  }

  .input-text {
    background-position: -117px 0;

    .login-input {
      border: none;
      border-bottom: 2px solid #50E3CE;
      padding: 0 15px;
      font-size: 13px;
      display: block;
      width: 375px;
      overflow: hidden;
      margin: 0 auto 15px;
      height: 48px;
      line-height: 48px;
    }

    .login-input-empty {
      border: none;
      border-bottom: 1px solid red;
    }

    .login-btn {
      background: #50E3CE;
      padding: 0 20px;
      font-size: 13px;
      display: block;
      width: 365px;
      overflow: hidden;
      margin: 0 auto 15px;
      height: 48px;
      line-height: 48px;
      border-radius: 5px;
      box-sizing: content-box;
    }
  }
}

.signup {
  position: fixed;
  top: 75%;
  left: 50%;
  margin-left: 40px;

  .signup-btn {
    margin-left: -3px;
    color: red;
    text-decoration: underline;
  }
}

@keyframes nezha1 {
  0% {
    left: 200px;
  }

  100% {
    left: -130px;
  }
}

@keyframes nezha2 {
  0% {
    left: 500px;
  }

  100% {
    left: -90px;
  }
}

@keyframes nezha3 {
  0% {
    left: 620px;
  }

  100% {
    left: -70px;
  }
}
</style>
