<template>
  <div class="q-pa-md card-main">
    <div style="font-size: 20px; text-align: center; font-weight: bold; margin-bottom: 20px;">Gerador de questões</div>
    <div style="display: grid; gap: 30px;">
      <q-input outlined v-model="newQuestion.materia" label="Matéria" />
      <q-input outlined v-model="newQuestion.topic" label="Topicos" />
      <q-input outlined v-model="newQuestion.curso" label="Curso" />
      <q-input outlined v-model="newQuestion.year" label="Ano" />
      <q-input outlined v-model="newQuestion.questionDissert" label="Número de perguntas objetivas" type="number" />
      <q-input outlined v-model="newQuestion.questionObjet" label="Número de perguntas dissertativas" type="number" />
    </div>
    <div style="float: right; margin: 10px 0;">
      <q-btn outline color="primary" @click="addNewQuestion">
        Gerar
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ['open'],
  data() {
    return {
      newQuestion: {
        questionDissert: 0,
        questionObjet: 0,
        materia: "",
        curso: "",
        year: "",
        topic: ""
      },
    }
  },
  methods: {
    addNewQuestion() {
      this.$emit("addquestion", this.newQuestion);
      this.newQuestion.questionDissert = 0;
      this.newQuestion.questionObjet = 0;
      this.newQuestion.materia = "";
      this.newQuestion.curso = "";
      this.newQuestion.year = "";
      this.newQuestion.topic = ""
    }
  }
}
</script>
<style scoped>
.card-main {
  background-color: #fff;
  border-radius: 15px;
  width: 600px;
}
</style>
