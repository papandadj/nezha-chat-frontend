export default {
  token: state => {
    return localStorage.getItem("nezha-token");
  },
  sideRight: state => {
    return state.sideRight
  }
}
