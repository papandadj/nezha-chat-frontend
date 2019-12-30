import axios from "axios";
import Vue from "vue";

let baseHost = "182.61.3.243"
// let baseHost = "localhost"
let baseRoot = "http://" + baseHost

const UserService = {
  baseURL: baseRoot + ":9500/",
  post(url, body, token) {
    axios.defaults.headers.common["token"] = token;
    return axios
      .post(this.baseURL + url, body)
  }
}

const FriendService = {
  baseURL: baseRoot + ":9501/",
  post(url, body, token) {
    axios.defaults.headers.common["token"] = token;
    return axios
      .post(this.baseURL + url, body)
  }
}

const ChatService = {
  baseURL: baseRoot + ":9503/",
  post(url, body, token) {
    if (token) {
      axios.defaults.headers.common["token"] = token;
    }
    return axios
      .post(this.baseURL + url, body)
  }
}
const CommonService = {
  baseURL: baseRoot + ":9502/",
  post(url, body, token) {
    if (token) {
      axios.defaults.headers.common["token"] = token;
    }
    return axios
      .post(this.baseURL + url, body)
  }
}

Vue.prototype.$UserService = UserService;
Vue.prototype.$FriendService = FriendService;
Vue.prototype.$ChatService = ChatService;
Vue.prototype.$CommonService = CommonService;
Vue.prototype.$SocketURL = "ws://182.61.3.243:15674/ws"
Vue.prototype.$SocketAccount = "guest"
Vue.prototype.$SocketPassword = "guest"
Vue.prototype.$DefaultURL = baseRoot + ":3000/nezha1.png"
