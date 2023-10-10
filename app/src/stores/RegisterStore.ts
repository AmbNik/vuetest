import { defineStore } from 'pinia';
import { ref } from "vue";
export const useRegisterStore = defineStore('register', () =>{


    const email= ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const getEmail = (newEmail: string, newPassword: string, newConfirmPassword: string) => {
        email.value = newEmail;
        password.value= newPassword;
        confirmPassword.value= newConfirmPassword;

    };
    return {
        email,
        password,
        confirmPassword,
        getEmail,
    };

});
