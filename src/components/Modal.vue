<template>
    <div>
        <div class="wrapper">
            <label>Private key
                <input id="privateKey" type="text">
            </label>
            <label>Your Address
                <input id="fromAddress" type="text">
            </label>
            <label>To Address
                <input id="toAddress" type="text">
            </label>
            <label>Amount
                <input id="amount" type="text">
            </label>
        </div>
        <input @click="genKeys" class="genKeys" type="button" value="Generate keys">
        <input @click="addTransaction" value="Add" type="button">
        <div @click="close" class="close"></div>
    </div>
</template>

<script>
import EC from 'elliptic';
const ec = new EC.ec('secp256k1');

export default {
    name: "Modal",
    methods: {
        close() {
            this.$emit('click', event.target.value);
        },
        addTransaction() {
            const transaction = {
                fromAddress: document.querySelector('#fromAddress').value,
                toAddress: document.querySelector('#toAddress').value,
                amount: document.querySelector('#amount').value,
                signingKey: ec.keyFromPrivate(document.querySelector('#privateKey').value)
            }

            try {
                this.$store.commit('addTransaction', transaction);
                this.$emit('click', event.target.value);
            } catch (error) {
                alert(error.message);
            }
        },
        genKeys() {
            const key = ec.genKeyPair();
            document.querySelector('#privateKey').value = key.getPrivate('hex');
            document.querySelector('#fromAddress').value = key.getPublic('hex');
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes appear{
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

div {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    animation: appear ease-in .3s forwards;
}

.wrapper {
    position: fixed;
    width: 70%;
    height: 70%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: left;
    justify-content: space-around;
    flex-direction: column;
}

label {
    position: relative;
    font-size: 1.5em;
    font-weight: 600;
    color: #959fa8;
}

input[type="text"] {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    font-size: .65em;
    padding: 5px;
    color: #363e44;
    border-radius: 5px;

    &:focus {
        outline: none;
        border: inset 4px #85bb65;
    }
}

input[type="button"] {
    position: fixed;
    top: 85%;
    left: 50%;
    width: 20%;
    padding: 10px;
    background: #85bb65;
    border: 3px solid #85bb65;
    color: white;
    border-radius: 10px;
    font-size: 1.5em;
    transform: translateX(-59%);

    &.genKeys {
        top: 10%;
        left: 20%;
    }

    &:hover {
        cursor: pointer;
        border-style: outset;
    }
    &:focus {
        outline: 0;
    }
    &:active {
        border-style: inset;
    }
}

.close {
    position: fixed;
    top: 15%;
    left: 90%;
    width: 30px;
    height: 30px;

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
