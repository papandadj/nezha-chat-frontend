export default {
  token: state => {
    return localStorage.getItem("nezha-token");
  },
  user: state => {
    return state.user
  },
  sideRight: state => {
    return state.sideRight
  },
  sideLeft: state => {
    return state.sideLeft
  },
  chatRecords: state => {
    return state.chatRecords
  },
  chatRecord: (state) => (friendId) => {
    let resp
    state.chatRecords.forEach((chatRecord) => {
      if (chatRecord.sender === friendId) {
        console.log("找到用户id", friendId, " 的信息", chatRecord)
        resp = chatRecord
      }
    })
    return resp
  }
}
