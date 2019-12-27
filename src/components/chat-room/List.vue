<template>
  <div class="list">
    <ul v-show="sideBarRight" class="list-ul">
      <li v-for="item in sideRight" @click="barRightClick(item)" :key="item.id">
        <img class="avatar" :src="item.img" :alt="item.username" />
        <span class="name">{{item.username}}</span>
      </li>
    </ul>

    <ul v-show="!sideBarRight" class="list-ul">
      <li v-for="item in sideLeft" @click="barLeftClick(item)" :key="item.id">
        <img class="avatar" :src="item.img" :alt="item.username" />
        <span class="name">{{item.username}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["sideBarRight", "friend"],
  name: "List",
  computed: {
    sideRight() {
      return this.$store.getters.sideRight;
    },
    sideLeft() {
      return this.$store.getters.sideLeft;
    },
    chatRecords() {
      return this.$store.getters.chatRecords;
    }
  },
  watch: {
    chatRecords() {}
  },
  data() {
    return {};
  },
  methods: {
    barRightClick(info) {
      this.$emit("changeMainAddUser", info);
    },
    barLeftClick(info) {
      console.log(info);
      this.$emit("changeMainChat", info);
    }
  }
};
</script>

<style lang="stylus" scoped>
.list {
  text-align: left;
  overflow-y: scroll;
  height: 650px;

  .list-ul {
    padding: 0 0;

    li {
      text-align: left;
      color: white;
      box-sizing: border-box;
      padding: 12px 15px;
      height: 65px;
      border-bottom: 2px solid #292C33;
      transition: background-color 0.1s;
      list-style: none;
      overflow: hidden;

      &:hover {
        background-color: rgba(255, 255, 255, 0.03);
      }

      &.active {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &:first-child {
        border-top: 1px solid #292C33;
      }

      .name {
        height: 40px;
        margin-left: 20px;
      }

      .avatar {
        vertical-align: middle;
        float: left;
        height: 40px;
        width: 40px;
        border-radius: 3px;
      }
    }
  }
}
</style>
