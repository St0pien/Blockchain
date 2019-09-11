<template>
  <div id="app">
    <div class="actions">
      <div class="icon">$</div>
      <div class="header">Blockchain Transactions</div>
      <button @click="addTransaction" class="button">Add Transaction</button>
      <button @click="mine = true" class="button" v-if="canMine">Mine Block</button>
    </div>
    <div class="blocks">
      <Block v-for="(block, index) in chain" :number="index" :key="index" />
    </div>

    <Modal @click="transaction = false" v-if="transaction" />
    <Mine @click="mine = false" v-if="mine" />
    <Transactions />
    <Pendings />
  </div>
</template>

<script>
import Block from './components/Block'
import Modal from './components/Modal'
import Pendings from './components/Pendings'
import Mine from './components/Mine'
import Transactions from './components/Transactions'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Block, Modal, Pendings, Mine, Transactions
  },
  data() {
    return {
      transaction: false,
      mine: false
    }
  },
  computed: {
    canMine() {
      return this.$store.getters.pendingTransactions.length > 0;
    },

    ...mapGetters(['chain'])
  },
  methods: {
    addTransaction() {
      this.transaction = true;
    },
  },
}
</script>

<style lang="scss">
$dark: #343a40;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: #fff;
}

.blocks {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 100px 50px;
}

.actions {
  background-color: $dark;
  width: 100%;
  height: 60px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
}

.button {
  background: transparent;
  border: 2px solid white;
  border-radius: 5%;
  margin: 10px 5px;
  padding: 0 5px;
  color: white;
  font-size: .9em;
  transition: background .15s ease-in-out;

  &:hover {
    background: #b2bfcc;
    cursor: pointer;
  }
}

.icon {
  position: absolute;
  top: 0;
  left: 2%;
  font-size: 3em;
  color: #85bb65;
  cursor: default;
}

.header {
  position: absolute;
  top: 20%;
  left: 5%;
  font-size: 2em;
}
</style>
