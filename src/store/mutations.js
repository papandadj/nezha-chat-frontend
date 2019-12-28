function changeChatRecords(state) {
  state.chatRecords.forEach((chatRecord, chatRecordIndex) => {
    let sender = chatRecord.sender
    state.sideLeft.forEach((sideLiftItem, index, sideLift) => {
      if (sender === sideLiftItem.id) {
        let swap = sideLift[chatRecordIndex]
        sideLift[chatRecordIndex] = sideLift[index]
        sideLift[index] = swap
      }
    })
  })
}

export default {
  setToken(state, token) {
    state.token = token
    localStorage.setItem("nezha-token", token);
  },

  setUser(state, user) {
    state.user = user
  },
  setSideRight(state, users) {
    if (typeof users === 'object') {
      state.sideRight = []
      for (let i = 0; i < users.length; i++) {
        state.sideRight.push({ img: users[i].img || state.defaultImage, username: users[i].username, id: users[i].id })
      }
    }
  },

  setSideLeft(state, users) {
    if (typeof users === 'object') {
      state.sideLeft = []
      for (let i = 0; i < users.length; i++) {
        state.sideLeft.push({ img: users[i].img || state.defaultImage, username: users[i].username, id: users[i].id })
      }
    }
    changeChatRecords(state)
  },

  setChatRecords(state, body) {
    if (!body || !body.sender) {
      return
    }

    let find = false
    state.chatRecords.forEach((chatRecord, index, chatRecords) => {
      if (chatRecord.sender === body.sender) {
        console.log("debug 该用户发送过消息了")
        chatRecord.data.push(body)
        chatRecords.splice(index, 1)
        state.chatRecords.unshift(chatRecord)
        find = true
      }
    })

    if (!find) {
      console.log("debug 该用户第一次发消息")
      state.chatRecords.unshift({
        sender: body.sender,
        data: [body]
      })
    }
    changeChatRecords(state)
  },
  setChatRecordsBySelf(state, { friendId, message }) {
    let find = false
    state.chatRecords.forEach((chatRecord, index, chatRecords) => {
      if (chatRecord.sender === friendId) {
        console.log("debug 已经有消息了")
        chatRecord.data.push({
          message: message,
          date: Date.now().toString() + '000000',
          self: true
        })
        chatRecords.splice(index, 1)
        state.chatRecords.unshift(chatRecord)
        find = true
      }
    })

    if (!find) {
      console.log("debug 第一次给改用户发送消息")
      state.chatRecords.unshift({
        sender: friendId,
        data: [{
          message: message,
          date: Date.now().toString() + '000000',
          self: true
        }]
      })
    }
    changeChatRecords(state)
  }

}
