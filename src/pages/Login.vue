<template>
    <div style="display: grid; justify-content: center; align-items: center;height: 100%;">
        <q-card style="width: 400px; padding:50px; border-radius: 15px;">
            <q-card-section>
                <div class="text-h4">
                    Login
                </div>
            </q-card-section>
            <q-card-section style="display: grid; gap: 15px;">
                <q-input outlined v-model="body.username" type="text" label="Username" required />
                <q-input outlined v-model="body.password" type="password" label="Senha" required />
            </q-card-section>
            <q-card-actions style="justify-content: right;">
                <q-btn outline color="primary" style="padding: 0 10px;" @click="login">
                    Entrar
                </q-btn>
            </q-card-actions>
        </q-card>
    </div>
</template>

<script>
import { loginService } from "src/services/index";
export default {
    name: 'Login',
    data() {
        return {
            body: {
                username: '',
                password: ''
            },
            loading: false
        }
    },
    methods: {
        async login() {
            this.$router.push('/home');
            // try {
            //     this.loading = true;
            //     const response = await loginService(this.body);
            //     console.log('Login bem-sucedido:', response);
            //     this.$router.push('/home');
            // } catch (error) {
            //     console.error('Erro no login:', error);
            // } finally {
            //     this.loading = false;
            // }
        }
    },
}
</script>
