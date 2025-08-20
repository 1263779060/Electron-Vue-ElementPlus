import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    useridentity: null,
    usertoken: null,
  }),
  actions: {
    setUserIdentity(identity) {
      this.useridentity = identity
    },
    setUserToken(token) {
      this.usertoken = token
    }
  }
})