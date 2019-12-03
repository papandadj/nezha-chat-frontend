<template>
  <div class="profile">
    <img class="avatar" src="@/assets/default-user.png" alt height="40px" width="40px" />
    <p class="name">papanda</p>

    <input class="search-input" type="text" placeholder="请输入用户" />

    <div class="footer">
      <div class="footer-item">
        <a class="link" href>
          <div class="iconfont userlist-icon">&#xe6bd;</div>
        </a>
      </div>
      <div class="footer-item">
        <a class="link" href>
          <div class="iconfont all-user">&#xe6ad;</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
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
  }

  .name {
    display: inline-block;
    margin: 0 0 0 15px;
    font-size: 16px;
  }

  .search-input {
    padding: 0 5px;
    margin: 10px 0px;
    height: 30px;
    width: 210px;
    border-radius: 4px;
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
