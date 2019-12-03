export default {
  INIT_DATA(state) {
    let data = localStorage.getItem('vue-chat-session');
    if (data) {
      state.sessions = JSON.parse(data);
    }
  },
  // 发送消息
  SEND_MESSAGE({ sessions, currentSessionId }, content) {
    let session = sessions.find(item => item.id === currentSessionId);
    session.messages.push({
      content: content,
      date: new Date(),
      self: true
    });
  },
  // 选择会话
  SELECT_SESSION(state, id) {
    state.currentSessionId = id;
  },
  // 搜索
  SET_FILTER_KEY(state, value) {
    state.filterKey = value;
  }
}
