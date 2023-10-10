<template>
    <div class="navbar">
        <div @click="$router.push('/')">Лого</div>
        <div class="navbar__btns">
            <my-button style="margin-left: 20px" @click="$router.push('/')">Главная</my-button>
            <my-button style="margin-left: 20px" @click="$router.push('/Login')">Войти</my-button>
            <my-button style="margin-left: 20px" @click="$router.push('/Register')">Регистрация</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
    components: {MyButton}
}
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>