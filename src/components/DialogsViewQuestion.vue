<template>
  <div style="display: grid; gap: 30px; width: 800px;">
    <q-card v-for="(item, index) in questions" :key="index" class="q-pa-md">
      <q-card-section class="text-center">
        <div class="text-h6 font-weight-bold">Questão</div>
      </q-card-section>
      <q-card-section>
        <div class="q-mb-md">
          <q-separator />
        </div>
        <div class="q-mb-md">
          <span class="text-subtitle2">Pergunta:</span>
          <div class="text-body1 q-mt-xs">{{ item.question }}</div>
        </div>
        <div class="q-mb-md">
          <span class="text-subtitle2">Tipo:</span>
          <div class="text-body1 q-mt-xs">{{ item.type }}</div>
        </div>
        <div class="q-mb-md">
          <span class="text-subtitle2">Matéria:</span>
          <div class="text-body1 q-mt-xs">{{ item.materia }}</div>
        </div>
        <div class="q-mb-md">
          <span class="text-subtitle2">Curso:</span>
          <div class="text-body1 q-mt-xs">{{ item.curso }}</div>
        </div>
        <div class="q-mb-md">
          <span class="text-subtitle2">Ano:</span>
          <div class="text-body1 q-mt-xs">{{ item.year }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['questions'],
}
</script>


