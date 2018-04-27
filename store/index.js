export const state = () => ({
  sidebar: false,
  snack: ''
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setSnack (state, snack) {
    state.snack = snack
  }
}
