<template>
    <div class="wrapper">
        <div class="form">
            <p>Balance of account:</p>
            <h1>{{ balance }}</h1>
        </div>
        <div @click="hide" class="close"></div>
    </div>
</template>

<script>
export default {
    name: "Balance",
    props: {
        address: {
            type: String,
            required: true
        }
    },
    computed: {
        balance() {
            return this.$store.getters.balanceOf(this.address);
        }
    },
    methods: {
        hide() {
            this.$emit('click', event.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes appear {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: appear ease-in .3s forwards;
}

.wrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 101;
}

.form {
    width: 70%;
    height: 40%;
    background: #fff;
    border-radius: 10%;
}

h1 {
    font-size: 5em;
    color: #85bb65;
}

p {
    font-size: 1.5em;
    margin-bottom: 30px;
    color: #343a40;
}

.close {
    width: 30px;
    height: 30px;
    position: fixed;
    top: 33%;
    left: 75%;

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        background: #959fa8;
        width: 20px;
        height: 2px;
        transform: rotate(45deg);
        transition: transform .5s ease-in-out;

    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        background: #959fa8;
        width: 20px;
        height: 2px;
        transform: rotate(-45deg);
        transition: transform .5s ease-in-out;
    }

    &:hover {
        cursor: pointer;

        &::before {
            transform: rotate(135deg);
        }
        &::after {
            transform: rotate(-135deg);
        }
    }
}
</style>
