import { defineStore } from 'pinia'

export const useUserToken = defineStore('userToken', {
  state: () => ({
    usertoken: null
  }),
  actions: {
    setUserToken(token) {
      this.usertoken = token
    }
  }
})