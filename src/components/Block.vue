<template>
    <div @click="activeBlock" :style="border" class="wrapper">
        <h1>Block {{ number }}</h1>
        <h2>Hash:</h2><p>{{ block.hash }}</p>
        <h2>Previous Hash:</h2><p>{{ block.previousHash }}</p>
        <h2>Nonce:</h2><p>{{ block.nonce }}</p> 
        <h2>Timestamp</h2><p>{{ block.timestamp }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Block",
    props: {
        number: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            border: ''
        }
    },
    computed: {
        block() {
            return this.$store.getters.chain[this.number];
        },

        ...mapState({ activeIndex: 'activeBlock' })
    },
    methods: {
        activeBlock() {
            this.$store.commit('setActiveBlock', this.number);
        }
    },
    watch: {
        activeIndex() {
            if(this.number === this.activeIndex) {
                this.border = 'border-color: #85bb65;';
            } else {
                this.border = '';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: white;
    width: 20%;
    height: 450px;
    padding: 20px;
    border-radius: 3%;
    margin-left: 20px;
    margin-top: 20px;
    border: 2px solid lightgray;
    
    &:hover {
        cursor: pointer;
    }
}

p {
    overflow-wrap: break-word;
    position: relative;
}

h2 {
    margin-top: 30px;
}

h1::after {
    content: '';
    display: block;
    width: 100%;
    transform: translate(-5%, 10px);
    height: 2px;
    background: lightgray;
}
</style>
