<template>
  <div>
    <h1>Transactions in block {{ activeBlock }}</h1>
    <table cellspacing="0">
      <tr>
        <th>Index</th>
        <th>From</th>
        <th>To</th>
        <th>Amount</th>
        <th>Valid</th>
      </tr>
      <tr v-for="(trans, index) in transactions" :key="index">
        <td>{{ index }}</td>
        <td><p @click="click(trans.fromAddress)">{{ trans.fromAddress }}</p></td>
        <td><p @click="click(trans.toAddress)">{{ trans.toAddress }}</p></td>
        <td>{{ trans.amount }}</td>
        <td>{{ trans.isValid() }}</td>
      </tr>
    </table>
    <Balance @click="balance = false" v-if="balance" :address="clickedAddress" />
  </div>
</template>

<script>
import Balance from './Balance'

export default {
  name: "Transactions",
  components: {
    Balance
  },
  data() {
    return {
      clickedAddress: '',
      balance: false
    }
  },
  computed: {
    activeBlock() {
      return this.$store.state.activeBlock;
    },
    transactions() {
        return this.$store.getters.chain[this.activeBlock].transactions;
    }
  },
  methods: {
    click(address) {
      this.clickedAddress = address;
      this.balance = true;
    }
  },
  created() {
    this.$store.commit('setActiveBlock', 0);
  }
};
</script>

<style lang="scss" scoped>
table {
    table-layout: fixed;
    width: 90%;
    text-align: center;
    margin: auto;
    margin-bottom: 100px;
}

td, th {
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 2px solid #ccc;
}

th {
    border-top: 2px solid #ddd;
}

h1 {
    color: #343a40;
    margin: 0 0 30px 20px;
}

td {
    background: #ddd
}

p:hover {
  cursor: pointer;
  color: #85bb65;
}
</style>
