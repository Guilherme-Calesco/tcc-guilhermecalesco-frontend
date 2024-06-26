<template>
  <div style="display: grid; gap: 30px; width: 800px;">
    <q-card v-if="question" class="q-pa-md">
      {{ question }}
      <q-card-section class="text-center">
        <div class="text-h6 font-weight-bold">Detalhes da Questão</div>
      </q-card-section>
      <q-card-section>
        <div class="q-mb-md">
          <q-separator />
        </div>
        <div class="q-mb-md" v-if="question.question">
          <span class="text-subtitle2">Pergunta:</span>
          <div class="text-body1 q-mt-xs">{{ question.question }}</div>
        </div>
        <div class="q-mb-md" v-if="question.type">
          <span class="text-subtitle2">Tipo:</span>
          <div class="text-body1 q-mt-xs">{{ question.type }}</div>
        </div>
        <div class="q-mb-md" v-if="question.materia">
          <span class="text-subtitle2">Matéria:</span>
          <div class="text-body1 q-mt-xs">{{ question.materia }}</div>
        </div>
        <div class="q-mb-md" v-if="question.curso">
          <span class="text-subtitle2">Curso:</span>
          <div class="text-body1 q-mt-xs">{{ question.curso }}</div>
        </div>
        <div class="q-mb-md" v-if="question.year">
          <span class="text-subtitle2">Ano:</span>
          <div class="text-body1 q-mt-xs">{{ question.year }}</div>
        </div>
        <div class="q-mb-md" v-if="question.topic">
          <span class="text-subtitle2">Tópicos:</span>
          <div class="text-body1 q-mt-xs">{{ question.topic }}</div>
        </div>
        <div class="q-mb-md" v-if="question.tags">
          <span class="text-subtitle2">Tags:</span>
          <div class="text-body1 q-mt-xs">{{ question.tags.join(', ') }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>
