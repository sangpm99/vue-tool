<script lang="ts" setup>
import { products, type Product } from "@/enums";
import Papa from "papaparse";

import ExportProductDrawer from "@/views/apps/Product/ExportProductDrawer.vue";

const product = ref<Product>();
const fileInput = ref<HTMLInputElement | null>(null);
const csvData = ref<any[]>([]);
const isExportProductDrawerOpen = ref<boolean>(false);

const onOpenExportProductDrawer = (p: Product) => {
  product.value = p;
  isExportProductDrawerOpen.value = true;
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const readCSV = (file: File) => {
  Papa.parse(file, {
    complete: (result) => {
      csvData.value = result.data;
    },
    header: true,
  });
};

const handleFileSelect = (event: Event) => {
  try {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      readCSV(target.files[0]);
      isExportProductDrawerOpen.value = true;
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VRow>
          <VCol cols="12">
            <VBtn class="float-end" @click="triggerFileInput">Upload File</VBtn>
            <div class="float-clear"></div>
          </VCol>
          <VCol cols="3" v-for="p in products">
            <VCard class="cursor-pointer" @click="onOpenExportProductDrawer(p)">
              <VCardText>
                <VImg :src="p.image"></VImg>
                <h5 class="text-h5 text-center mt-2">{{ p.name }}</h5>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>

    <input
      @change="handleFileSelect"
      ref="fileInput"
      type="file"
      accept="text/csv"
      hidden
    />

    <ExportProductDrawer
      v-model:is-drawer-open="isExportProductDrawerOpen"
      :product="product"
      :csvData="csvData"
    ></ExportProductDrawer>
  </section>
</template>
