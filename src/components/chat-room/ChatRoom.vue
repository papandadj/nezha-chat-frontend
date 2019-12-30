<template>
  <div class="curtain-background">
    <div class="curtain">
      <div class="sidebar">
        <Profile @changeSideBarRight="changeSideBarRight" @changeSideBarLeft="changeSideBarLeft"></Profile>
        <List
          @changeMainAddUser="changeMainAddUser"
          @changeMainChat="changeMainChat"
          :sideBarRight="sideBarRight"
          :friend="friend"
          :key="sideBarRight"
        ></List>
      </div>

      <div v-if="mainType==='chat'" class="main">
        <Message :friend="friend"></Message>
        <InputText :friend="friend" :key="friend.id"></InputText>
      </div>

      <div v-if="mainType==='info'" class="main">
        <UserInfo
          v-bind:img="mainAddUser.img"
          v-bind:username="mainAddUser.username"
          v-bind:id="mainAddUser.id"
        ></UserInfo>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "./Profile";
import List from "./List";
import Message from "./Message";
import InputText from "./InputText";
import UserInfo from "./UserInfo";

export default {
  name: "ChatRoom",
  components: {
    Profile,
    List,
    Message,
    InputText,
    UserInfo
  },
  data() {
    return {
      inputText: "",
      sideBarRight: false,
      mainType: "",
      friend: {},
      mainAddUser: {
        img: "",
        username: "",
        id: ""
      }
    };
  },
  methods: {
    changeMainAddUser(info) {
      this.mainType = "info";
      this.mainAddUser.img = info.img;
      this.mainAddUser.username = info.username;
      this.mainAddUser.id = info.id;
    },
    changeMainChat(info) {
      this.mainType = "chat";
      this.friend = info;
      console.log(info);
    },

    changeSideBarRight() {
      this.mainType = "";
      this.sideBarRight = true;
    },
    changeSideBarLeft() {
      this.mainType = "chat";
      this.sideBarRight = false;
    }
  },
  mounted: function() {
    let that = this;

    this.$ChatService
      .post("get_queue", {})
      .then(response => {
        if (response.status === 200) {
          let queue = response.data.queue;

          let ws = new WebSocket(this.$SocketURL);
          // eslint-disable-next-line
          let client = Stomp.over(ws);
          client.heartbeat.outgoing = 20000;
          client.heartbeat.incoming = 0;

          let onConnect = function(x) {
            client.subscribe(queue, function(data) {
              console.log("receive rabbit data : ", data.body);
              let body = JSON.parse(data.body);
              that.$store.commit("setChatRecords", body);
            });
          };

          let onError = function(err) {
            console.log("error: ", err);
          };

          client.connect(
            this.$SocketAccount,
            this.$SocketPassword,
            onConnect,
            onError,
            "/"
          );
        }
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style lang="stylus" scoped>
.curtain-background {
  margin: auto;
  text-align: center;
  background-color: #edf2f7;
  width: 1200px;
  height: 900px;
  position: relative;

  .curtain {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1000px;
    height: 800px;
    margin: -400px -500px;
    border-radius: 3px;
    overflow: hidden;

    .sidebar, .main {
      height: 100%;
    }

    .sidebar {
      float: left;
      width: 250px;
      background-color: #06182c;
    }

    .main {
      position: relative;
      overflow: hidden;
    }
  }
}
</style>
