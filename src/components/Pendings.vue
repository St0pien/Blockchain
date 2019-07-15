<template>
    <div>
        <h1>Pending Transactions</h1>
        <div class="table">
            <table cellspacing="0">
                <tr>
                    <th>Index</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Amount</th>
                    <th>Valid</th>
                </tr>
                <tr v-for="(trans, index) in pendingTransactions" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ trans.fromAddress }}</td>
                    <td>{{ trans.toAddress }}</td>
                    <td>{{ trans.amount }}</td>
                    <td>{{ trans.isValid() }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pendings",
    computed: {
        pendingTransactions() {
            return this.$store.getters.pendingTransactions;
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    width: 98vw;
}

.table {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    color: #343a40;
    margin: 0 0 30px 20px;
}

table {
    table-layout: fixed;
    width: 90%;
    text-align: center;
}

td, th {
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 2px solid #ccc;
}

th {
    border-top: 2px solid #ddd;
}

td {
    background: #ddd
}
</style>
