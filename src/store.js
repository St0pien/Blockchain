import Vue from 'vue'
import Vuex from 'vuex'
import { Blockchain, Transaction } from './blockchain'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blockchain: new Blockchain(),
    activeBlock: 'none'
  },
  mutations: {
    mine(state, rewardAddress) {
      state.blockchain.minePendingTransactions(rewardAddress);
    },
    addTransaction(state, { fromAddress, toAddress, amount, signingKey }) {
      const trans = new Transaction(fromAddress, toAddress, amount);

      trans.signTransaction(signingKey);
      state.blockchain.addTransaction(trans);
    },
    setActiveBlock(state, index) {
      state.activeBlock = index;
    }
  },
  actions: {
  },
  getters: {
    chain(state) {
      return state.blockchain.chain;
    },
    pendingTransactions(state) {
      return state.blockchain.pendingTransactions;
    },
    balanceOf: (state) => (address) => {
      return state.blockchain.getBalanceOfAddress(address);
    }
  }
})
