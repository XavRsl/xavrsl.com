export const state = () => ({
  showWelcome: true,
  showTweets: false,
})

export const mutations = {
  toggleWelcome(state) {
    state.showWelcome = !state.showWelcome
  },
  toggleTweets(state) {
    state.showTweets = !state.showTweets
  },
}
