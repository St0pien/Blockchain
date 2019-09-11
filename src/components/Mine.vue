<template>
    <div class="wrapper">
        <div class="form">
            <label for="reward">Reward Address</label>
            <input v-model="address" name="reward" type="text">
            <input @click="click" type="button" value="Mine">
        </div>
        <div @click="hide" class="close"></div>
    </div>
</template>

<script>
export default {
    name: "Mine",
    data() {
        return {
            address: '',
        }
    },
    methods: {
        click() {
            if(this.address !== '') {
                this.$store.commit('mine', this.address);
                this.$emit('click', event.target.value);
            } else {
                alert("You have empty address!!!");
            }
        },
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

label {
    font-size: 1.5em;
    font-weight: 600;
    color: #959fa8;
}

input[type="text"] {
    margin: 20px;
    border: inset 2px #ddd;
    border-radius: 5px;
    font-size: 1em;
    padding: 5px;
    width: 90%;

    &:focus {
        outline: none;
        border: inset 4px #85bb65;
    }
}

input[type="button"] {
    background: #85bb65;
    margin-top: 20px;
    width: 30%;
    padding: 10px;
    color: white;
    font-size: 1.8em;
    border: 3px solid #85bb65;
    border-radius: 10px;

    &:focus {
        outline: none;
    }

    &:hover {
        border-style: outset;
    }

    &:active {
        border-style: inset;
    }
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
