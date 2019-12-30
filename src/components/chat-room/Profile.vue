<template>
  <div class="profile">
    <img class="avatar" :src="profile.imgUrl" />
    <p class="name">{{profile.name}}</p>

    <input class="search-input" type="text" v-model="inputText" placeholder="请输入用户" />

    <div class="footer">
      <div class="footer-item">
        <a class="link" v-on:click="getFriend">
          <div class="iconfont userlist-icon">&#xe6bd;</div>
        </a>
      </div>
      <div class="footer-item">
        <a class="link" v-on:click="getAllUser">
          <div class="iconfont all-user">&#xe6ad;</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profile: {
        imgUrl: "",
        name: "",
        id: ""
      },
      inputText: "",
      barSelector: "left"
    };
  },
  mounted() {
    this.$UserService
      .post("get", {}, this.getToken())
      .then(response => {
        if (response.status === 200) {
          this.profile.name = response.data.username;
          this.profile.imgUrl = response.data.img || this.$DefaultURL;
          this.id = response.data.id;

          this.$store.commit("setUser", this.profile);
          this.getFriend();
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  },
  methods: {
    getToken() {
      return this.$store.getters.token;
    },
    getFriend() {
      this.$FriendService
        .post(
          "get_list",
          {
            name: this.inputText
          },
          this.getToken()
        )
        .then(response => {
          if (response.status === 200) {
            this.$emit("changeSideBarLeft");
            this.$store.commit("setSideLeft", response.data.list);
          }
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    getAllUser() {
      this.$UserService
        .post("get_list", { name: this.inputText }, this.getToken())
        .then(response => {
          if (response.status === 200) {
            this.$emit("changeSideBarRight");
            this.$store.commit("setSideRight", response.data.list);
          }
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style lang="stylus"  scoped>
.profile {
  color: white;
  text-align: left;
  padding: 12px 12px 0 12px;
  border-bottom: solid 1px black;

  .avatar, .name {
    vertical-align: middle;
  }

  .avatar {
    border-radius: 1000px;
    height: 40px;
    width: 40px;
  }

  .name {
    display: inline-block;
    margin: 0 0 0 15px;
    font-size: 16px;
  }

  .search-input {
    padding: 0 5px;
    margin: 10px 0px;
    height: 35px;
    width: 100%;
    border-radius: 4px;
    clear: both;
  }

  .footer {
    height: 40px;
    display: flex;
    margin-bottom: 3px;

    .footer-item {
      width: 50%;
      float: left;
      height: 100%;
      text-align: center;
      border: solid 1px #fff;

      .link {
        text-decoration: none;
      }
    }

    .userlist-icon, .all-user {
      padding-top: 5px;
      height: 100%;
      color: white;
      font-size: 28px;
      vertical-align: middle;
    }
  }
}
</style>
