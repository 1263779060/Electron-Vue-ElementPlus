import { defineStore } from 'pinia'

export const useUserIdentity = defineStore('userIdentity', {
  state: () => ({
    useridentity: null
  }),
  actions: {
    setUserIdentity(identity) {
      this.useridentity = identity
    }
  }
})