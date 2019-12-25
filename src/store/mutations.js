export default {
  setToken(state, token) {
    state.token = token
    localStorage.setItem("nezha-token", token);
  },
  setSideRight(state, users) {
    if (typeof users === 'object') {
      state.sideRight = []
      for (let i = 0; i < users.length; i++) {
        state.sideRight.push({ img: users[i].img || state.defaultImage, username: users[i].username, id: users[i].id })
      }
    }
  }
}
