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
          <div v-if="errorMessage" class="text-negative q-mt-md">{{ errorMessage }}</div>
        </q-card-section>
        <q-card-actions style="justify-content: right;">
          <q-btn outline color="primary" style="padding: 0 10px;" @click="login" :disable="loading">
            Entrar
          </q-btn>
        </q-card-actions>
        <q-spinner v-if="loading" class="q-my-md" />
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
        loading: false,
        errorMessage: '' // Adiciona a propriedade errorMessage
      }
    },
    methods: {
      async login() {
        try {
          this.loading = true;
          this.errorMessage = ''; // Reseta a mensagem de erro ao iniciar o login
          const response = await loginService(this.body);
          console.log('Login bem-sucedido:', response);
          this.$router.push('/home');
        } catch (error) {
          console.error('Erro no login:', error);
          this.errorMessage = 'Credenciais inválidas'; // Define a mensagem de erro
        } finally {
          this.loading = false;
        }
      }
    },
  }
  </script>
  
  <style scoped>
  .text-negative {
    color: red;
  }
  </style>
  