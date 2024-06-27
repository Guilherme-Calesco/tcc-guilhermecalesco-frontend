<template>
  <div style="display: grid; gap: 30px; width: 800px;">
    <q-card v-if="selectedItem" class="q-pa-md">
      <q-card-section class="text-center">
        <div class="text-h6 font-weight-bold">Detalhes da Questão</div>
      </q-card-section>
      <q-card-section>
        <div class="q-mb-md">
          <q-separator />
        </div>
        <div class="q-mb-md" v-if="selectedItem.question">
          <span class="text-subtitle2">Pergunta:</span>
          <div class="text-body1 q-mt-xs">{{ selectedItem.question }}</div>
        </div>
        <div class="q-mb-md" v-if="selectedItem.type">
          <span class="text-subtitle2">Tipo:</span>
          <div class="text-body1 q-mt-xs">{{ selectedItem.type }}</div>
        </div>
        <div class="q-mb-md" v-if="selectedItem.materia">
          <span class="text-subtitle2">Matéria:</span>
          <div class="text-body1 q-mt-xs">{{ selectedItem.materia }}</div>
        </div>
        <div class="q-mb-md" v-if="selectedItem.curso">
          <span class="text-subtitle2">Curso:</span>
          <div class="text-body1 q-mt-xs">{{ selectedItem.curso }}</div>
        </div>
        <div class="q-mb-md" v-if="selectedItem.year">
          <span class="text-subtitle2">Ano:</span>
          <div class="text-body1 q-mt-xs">{{ selectedItem.year }}</div>
        </div>
        <div class="q-mb-md" v-if="selectedItem.topic">
          <span class="text-subtitle2">Tópicos:</span>
          <div class="text-body1 q-mt-xs">{{ selectedItem.topic }}</div>
        </div>
        <div class="q-mb-md" v-if="selectedItem.tags">
          <span class="text-subtitle2">Tags:</span>
          <div class="text-body1 q-mt-xs">{{ selectedItem.tags.join(', ') }}</div>
        </div>
        <div class="q-mb-md" v-if="selectedItem.options && selectedItem.options.length">
          <span class="text-subtitle2">Opções:</span>
          <div class="text-body1 q-mt-xs">
            <ul>
              <li v-for="(option, index) in selectedItem.options" :key="index">{{ option }}</li>
            </ul>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['selectedItem']
}
</script>
