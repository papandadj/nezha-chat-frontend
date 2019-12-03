<template>
  <div class="message">
    <ul v-if="sessions">
      <li class="message-li" v-for="(item, index) in sessions[0].messages" :key="index">
        <div class="time">{{item.date | time}}</div>
        <div class="content">
          <img class="avatar" :src="item.self ? user.img :  sessions[0].img" />
          <div class="content-data">
            <span class="triangle_border_left"></span>
            {{item.content}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "Message",
  computed: {
    sessions() {
      return store.state.sessions;
    },
    user() {
      return store.state.user;
    }
  },
  filters: {
    // 将日期过滤为 hour:minutes
    time(date) {
      if (typeof date === "string") {
        date = new Date(date);
      }
      return date.getHours() + ":" + date.getMinutes();
    }
  }
};
</script>

<style lang="stylus" scoped>
.message {
  box-sizing: border-box;
  background-color: #e8edf2;
  padding: 15px;
  overflow-y: scroll;
  height: 75%;
  border-bottom: 3px solid black;

  ul {
    .message-li {
      list-style: none;

      .time {
        margin: 7px;
        padding: 0 18px;
        font-size: 12px;
        color: black;
        border-radius: 2px;
      }

      .content {
        display: flex;

        .avatar {
          height: 40px;
          width: 40px;
          float: left;
          min-width: 40px;
          border-radius: 2px;
          margin: 0 10px;
        }

        .content-data {
          position: relative;
          background-color: #52ca3b;
          font-size: 16px;
          display: inline-block;
          padding: 0 10px;
          min-height: 30px;
          text-align: left;
          border-radius: 5px;
          word-break: break-all;
        }

        .triangle_border_left {
          width: 0;
          height: 0;
          border-width: 3px 6px 3px;
          border-style: solid;
          border-color: transparent #52ca3b transparent transparent; /* 透明 灰 透明 透明 */
          position: absolute;
          left: -10px;
          top: 12px;
        }
      }
    }
  }
}
</style>
