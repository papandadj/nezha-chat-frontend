import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import ChatRoom from '@/components/chat-room/ChatRoom'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [{
    path: "/login",
    name: "Login",
    component: Login
  }, {
    path: "/chat-room",
    name: "ChatRoom",
    component: ChatRoom
  }, {
    path: "/test",
    name: "Test",
    component: Test
  }
  ]
})
