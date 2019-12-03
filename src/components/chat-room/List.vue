<template>
  <div class="list">
    <ul class="list-ul">
      <li v-for="item in sessions" @click="selectsessions(item.id)" :key="item.id">
        <img class="avatar" :src="item.img" :alt="item.name" />
        <p class="name">{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "List",
  computed: {
    sessions() {
      return store.state.sessions;
    }
  }
};
</script>

<style lang="stylus" scoped>
.list {
  text-align: left;

  .list-ul {
    padding: 0 0;

    li {
      text-align: left;
      box-sizing: border-box;
      padding: 12px 15px;
      height: 65px;
      border-bottom: 2px solid #292C33;
      transition: background-color 0.1s;
      list-style: none;

      &:hover {
        background-color: rgba(255, 255, 255, 0.03);
      }

      &.active {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &:first-child {
        border-top: 2px solid #292C33;
      }

      .name {
        display: inline;
        padding: 0px 20px;
      }

      .avatar {
        vertical-align: middle;
        height: 40px;
        width: 40px;
        border-radius: 3px;
      }
    }
  }
}
</style>
