<script lang="ts" setup>
import { products, type Product } from "@/enums";

import ExportProductDrawer from "@/views/apps/Product/ExportProductDrawer.vue";

const product = ref<Product>();
const isExportProductDrawerOpen = ref<boolean>(false);

const onOpenExportProductDrawer = (p: Product) => {
  product.value = p;
  isExportProductDrawerOpen.value = true;
};
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VRow>
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

    <ExportProductDrawer
      v-model:is-drawer-open="isExportProductDrawerOpen"
      :product="product"
    ></ExportProductDrawer>
  </section>
</template>
