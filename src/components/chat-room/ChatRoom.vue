<template>
  <div class="curtain-background">
    <div class="curtain">
      <div class="sidebar">
        <Profile></Profile>
        <List></List>
      </div>

      <div class="main">
        <Message></Message>
        <InputText></InputText>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "./Profile";
import List from "./List";
import { actions } from "../../store";
import Message from "./Message";
import InputText from "./InputText";

export default {
  vuex: {
    actions: actions
  },

  name: "ChatRoom",
  components: {
    Profile,
    List,
    Message,
    InputText
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
