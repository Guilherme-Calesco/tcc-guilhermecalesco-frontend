<template>
  <div class="row q-pa-md">
    <div class="q-pa-md" style="text-align: center; font-size: 20px; font-weight: bold;">TCC GUILHERME CALESCO</div>
    <div class="col-12" style="display: flex; justify-content: space-between;">
      <div></div>
      <q-btn outline color="primary" @click="openDialog">
        Gerar novas pergunta
      </q-btn>
    </div>
    <div class="col-12 card-main">
      <q-table title="Perguntas geradas" @row-click="viewQuestions" :filter="filter" :data="tableValue"
        :columns="columns" row-key="name">
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="open">
      <DialogsGenerate @addquestion="handleAddQuestion" />
    </q-dialog>
    <q-dialog v-model="openView">
      <DialogsViewQuestion :questions="tableValue" />
    </q-dialog>
  </div>
</template>

<script>
import DialogsGenerate from "components/DialogsGenerate.vue";
import DialogsViewQuestion from "components/DialogsViewQuestion.vue";

export default {
  name: 'Home',
  components: {
    DialogsGenerate,
    DialogsViewQuestion
  },
  data() {
    return {
      filter: '',
      openView: false,
      open: false,
      columns: [
        { label: 'Questões', field: 'question', align: 'left', sortable: true },
        { label: 'Tipo', field: 'type', align: 'left', sortable: true },
        { label: 'Materia', field: 'materia', align: 'left', sortable: true },
        { label: 'Curso', field: 'curso', align: 'left', sortable: true },
        { label: 'Ano', align: 'center', field: 'year', sortable: true },
      ],
      newQuestion: {
        questionDissert: 0,
        questionObjet: 0,
        materia: "",
        curso: "",
        year: "",
        topic: "",
      },
      question: [{

      }],
      tableValue: []
    }
  },
  created() {
    this.tableValue.push({
      question: "AAAAAA",
      type: "AAAAAA",
      tags: ["AAAAAA", "AAAAAA", "AAAAAA",],
      materia: "AAAAAA",
      curso: "AAAAAA",
      year: "AAAAAA"
    })
  },
  methods: {
    viewQuestions(row) {
      this.newQuestion = row;
      this.openView = true;
    },
    openDialog() {
      this.open = true;
    },

    handleAddQuestion(newQuestion) {
      // this.tableValue.push({
      //   materia: newQuestion.materia,
      //   curso: newQuestion.curso,
      //   year: newQuestion.year,
      //   topic: newQuestion.topic,
      //   questionDissert: newQuestion.questionDissert,
      //   questionObjet: newQuestion.questionObjet,
      // });
      this.open = false;
    }
  }
}
</script>

<style scoped>
.card-main {
  background-color: #fff;
  border-radius: 15px;
  margin: 30px 0;
}
</style>
