<template>
  <div class="message" id="scrollMessage">
    <ul id="scrollUl">
      <li class="message-li" v-for="(item, index) in chatRecord" :key="index">
        <div class="time">{{item.date | time}}</div>
        <div class="content" :class="{self: item.self}">
          <img class="avatar" :src="item.self ? user.imgUrl :  friend.img" />
          <div class="content-data">{{item.message}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: ["friend"],
  computed: {
    chatRecord() {
      let record = this.$store.getters.chatRecord(this.friend.id);
      console.log(record);
      if (!record) {
        return [];
      }
      return record.data;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    chatRecord() {
      setTimeout(() => {
        this.toTop();
      }, 100);
    }
  },
  filters: {
    // 将日期过滤为 hour:minutes
    time(date) {
      if (typeof date === "string") {
        date = date.slice(0, -6);
        date = new Date(parseInt(date));
      }
      return date.getHours() + ":" + date.getMinutes();
    }
  },
  methods: {
    toTop() {
      var objDiv = document.getElementById("scrollMessage");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  },
  mounted() {
    this.toTop();
  }
};
</script>

<style lang="stylus" scoped>
.message {
  background-color: #e8edf2;
  padding: 15px;
  overflow-y: scroll;
  height: 75%;
  border-bottom: 3px solid black;

  ul {
    .message-li {
      list-style: none;

      .time {
        margin: 20px;
        padding: 0 18px;
        font-size: 12px;
        color: black;
        border-radius: 2px;
        display: block;
      }

      .content {
        text-align: left;

        .avatar {
          display: inline-block;
          height: 40px;
          width: 40px;
          margin: 0 10px 0 0;
          border-radius: 3px;
        }

        .content-data {
          display: inline-block;
          position: relative;
          padding: 0 10px;
          min-height: 30px;
          max-width: 600px;
          line-height: 2.5;
          font-size: 14px;
          text-align: left;
          word-break: break-all;
          background-color: white;
          border-radius: 4px;

          &:before {
            content: ' ';
            position: absolute;
            top: 9px;
            right: 100%;
            border: 6px solid transparent;
            border-right-color: white;
          }
        }
      }

      .self {
        text-align: right;

        .avatar {
          float: right;
          margin: 0 0 0 10px;
        }

        .content-data {
          background-color: greenYellow;

          &:before {
            right: inherit;
            left: 100%;
            border-right-color: transparent;
            border-left-color: greenYellow;
          }
        }
      }
    }
  }
}
</style>
