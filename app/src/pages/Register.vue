<template>
        <div class="registration-form">
            <h2>Регистрация</h2><br>

                <div class="form-group">
                    <label for="username">Имя пользователя:</label><br>
                    <input v-model="newEmail" type="text" placeholder="Email" />
                </div>
                <div class="form-group">
                    <label for="password">Пароль:</label><br>
                    <input v-model="newPassword" type="password" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="ConfirmPassword">Повтор пароля:</label><br>
                    <input v-model="newConfirmPassword" type="password" placeholder="Confirm Password" />
                </div>
                <button type="submit" @click="register.getEmail(newEmail,newPassword,newConfirmPassword)">Register</button>
        </div>


    <span>Имя пользователя: {{ register.email }}</span><br>
    <span>Пароль: {{ register.password }}</span><br>
    <span>Повтор пароля: {{ register.confirmPassword }}</span><br>
</template>

<script setup>
import { ref } from 'vue';
import {useRegisterStore} from "../stores/RegisterStore";
const register = useRegisterStore();
const newEmail = ref("");
const newPassword = ref("");
const newConfirmPassword = ref("");
</script>

<style>
.registration-form {
    text-align: center;
}

input {
    margin-bottom: 10px;
    padding: 8px;
    width: 200px;
}

button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}
</style>