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
      <q-table
        title="Perguntas geradas"
        row-key="id" 
        :filter="filter"
        :rows-per-page-options="[0]"
        :pagination="{ rowsPerPage: 0 }"
        :data="tableValue"
        :columns="columns"
      >
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Buscar">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr @click="viewQuestions(props.row)">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ props.row[col.field] }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <q-dialog v-model="open">
      <DialogsGenerate @addquestion="handleAddQuestion" />
    </q-dialog>
    <q-dialog v-model="openView">
      <DialogsViewQuestion :selectedItem="selectedItem" />
    </q-dialog>
  </div>
</template>

<script>
import axios from 'axios';
import DialogsGenerate from "components/DialogsGenerate.vue";
import DialogsViewQuestion from "components/DialogsViewQuestion.vue";

const API_URL = 'http://localhost:8080';

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
        { label: 'Questões', field: 'question', name: 'question', align: 'left', sortable: true },
        { label: 'Tipo', field: 'type', name: 'type', align: 'left', sortable: true },
        { label: 'Matéria', field: 'materia', name: 'materia', align: 'left', sortable: true },
        { label: 'Curso', field: 'curso', name: 'curso', align: 'left', sortable: true },
        { label: 'Ano', name: 'year', align: 'center', field: 'year', sortable: true },
      ],
      newQuestion: {
        questionDissert: 0,
        questionObjet: 0,
        materia: "",
        curso: "",
        year: "",
        topic: "",
      },
      selectedItem: null, // Inicializa como null
      tableValue: []
    }
  },
  async created() {
    await this.fetchQuestions();
  },
  methods: {
    viewQuestions(row) {
      this.selectedItem = row;
      this.openView = true;
    },
    openDialog() {
      this.open = true;
    },
    async fetchQuestions() {
      try {
        const response = await axios.get(`${API_URL}/questions`);
        this.tableValue = response.data;
      } catch (error) {
        console.error('Erro ao buscar as perguntas:', error);
      }
    },
    async handleAddQuestion(newQuestions) {
      this.tableValue.push(...newQuestions);
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
