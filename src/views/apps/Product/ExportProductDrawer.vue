<script lang="ts" setup>
import { requiredValidator } from "@/@core/utils/validators";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import { VForm } from "vuetify/components/VForm";
import Papa from "papaparse";

import Alert from "@/components/Alert.vue";
import { type Product, booleanOptions } from "@/enums";

interface Props {
  isDrawerOpen: boolean;
  product?: Product;
  csvData: any[];
}
interface Emit {
  (e: "update:isDrawerOpen", value: boolean): void;
  (e: "submit"): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const loading: Ref<boolean> = ref(false);
const random = ref<boolean>(true);
const keepDescription = ref<boolean>(false);
const changePrice = ref<boolean>(false);
const newPrice = ref<number>(0);
const quantity = ref<string>("20");
const productCount = ref<number>(0);
/// notify
const refFormExport = ref<VForm>();
const isSnackbarVisible = ref<boolean>(false);
const message = ref<string>("");
const messageType = ref<string>("error");
const csvData = ref<any[]>([]);
const selectedProducts = ref<any[]>([]);

const handleReset = () => {
  refFormExport.value?.reset();
  refFormExport.value?.resetValidation();
  random.value = true;
  keepDescription.value = false;
  changePrice.value = false;
  newPrice.value = 0;
  quantity.value = "20";
  productCount.value = 0;
  csvData.value = [];
  selectedProducts.value = [];
};

const handleDrawerModelValueUpdate = (val: boolean) => {
  emit("update:isDrawerOpen", val);
};

const loadCSV = async () => {
  if (props.product) {
    const csvUrl = props.product.url;

    Papa.parse(csvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        csvData.value = await onChangeSkuId(results.data);

        csvData.value.forEach((item: any) => {
          if (item.Type === "simple" || item.Type === "variable") {
            item["Categories"] = props.product?.name || "";
          }
        });

        productCount.value = csvData.value.filter(
          (item) => item.Type === "simple" || item.Type === "variable",
        ).length;
      },
      error: (error) => {
        message.value = `Error parsing CSV: ${error}`;
        isSnackbarVisible.value = true;
        messageType.value = "error";
      },
    });
  }
};

const onPreview = () => {
  const allData = [...csvData.value];

  // Nếu removeDescription, xóa description của tất cả bản ghi
  if (keepDescription.value === false) {
    allData.forEach((item: any) => {
      item["Description"] = "";
    });
  }

  // Nếu changePrice được bật và newPrice > 0, thay đổi giá
  if (changePrice.value && newPrice.value && newPrice.value > 0) {
    allData.forEach((item: any) => {
      if (item.Type === "simple" || item.Type === "variation") {
        item["Regular price"] = newPrice.value;
      }
    });
  }

  // Dữ liệu đã xử lý mô tả và giá sẽ được dùng cho logic tiếp theo
  const allVariation = allData.filter((item: any) => item.Type === "variation");
  const allSimpleOrVariable = allData.filter(
    (item: any) => item.Type === "simple" || item.Type === "variable",
  );

  let qty = parseInt(quantity.value);
  if (isNaN(qty) || qty <= 0) {
    qty = 20;
  }

  let selected: any[] = [];

  if (random.value) {
    // Random bản ghi simple/variable
    const shuffled = allSimpleOrVariable.sort(() => 0.5 - Math.random());
    selected = shuffled.slice(0, qty);
  } else {
    // Lấy theo thứ tự đầu tiên
    selected = allSimpleOrVariable.slice(0, qty);
  }

  // Thêm variation đi theo variable
  const result: any[] = [];
  selected.forEach((product: any) => {
    result.push(product);

    if (product.Type === "variable") {
      const variations = allVariation.filter(
        (v: any) => v.Parent === `id:${product.ID}`,
      );
      result.push(...variations);
    }
  });

  selectedProducts.value = onChangeSkuId(result);
};

const onChangeSkuId = (originData: any[]): any[] => {
  try {
    let id = 0;
    for (let i = 0; i < originData.length; i++) {
      originData[i]["SKU"] = "";
      if (originData[i]["Type"] === "variable") {
        id += 1;
        originData[i]["ID"] = id;
      }
      if (originData[i]["Type"] === "variation") {
        originData[i]["Parent"] = `id:${id}`;
      }
    }
    return originData;
  } catch (error) {
    message.value = JSON.stringify(error);
    messageType.value = "error";
    isSnackbarVisible.value = true;
    return [];
  }
};

const handleSubmit = () => {
  refFormExport.value?.validate().then(async ({ valid }) => {
    if (valid) {
      try {
        const csv = Papa.unparse(selectedProducts.value);

        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = props.product ? `${props.product.name}.csv` : "data.csv";
        a.click();

        URL.revokeObjectURL(url);
        handleDrawerModelValueUpdate(false);
        emit("submit");
        message.value = "Successfully";
        isSnackbarVisible.value = true;
        messageType.value = "success";
        handleReset();
      } catch (error) {
        message.value = "Something went wrong.";
        isSnackbarVisible.value = true;
        messageType.value = "error";
      }
    }
  });
};

watch(
  () => props.csvData,
  async () => {
    try {
      csvData.value = await onChangeSkuId(props.csvData);

      csvData.value.forEach((item: any) => {
        if (item.Type === "simple" || item.Type === "variable") {
          item["Categories"] = props.product?.name || "";
        }
      });

      productCount.value = csvData.value.filter(
        (item) => item.Type === "simple" || item.Type === "variable",
      ).length;
    } catch (error) {
      message.value = `Error parsing CSV: ${error}`;
      isSnackbarVisible.value = true;
      messageType.value = "error";
    }
  },
);

watch(
  () => props.isDrawerOpen,
  () => {
    if (props.isDrawerOpen) {
      handleReset();
      loadCSV();
    }
  },
);
</script>

<template>
  <VNavigationDrawer
    :model-value="props.isDrawerOpen"
    location="end"
    width="1500"
    temporary
    border="none"
    class="scrollable-content"
    order="10"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <AppDrawerHeaderSection
      :title="props.product ? `Export ${props.product.name}` : 'Export Product'"
      @cancel="handleDrawerModelValueUpdate(false)"
    >
      <template #beforeClose>
        <VBtn
          color="teal"
          class="me-4"
          :loading="loading"
          size="small"
          variant="outlined"
          readonly
        >
          {{ productCount }} Product Totals
        </VBtn>

        <VBtn
          color="info"
          class="me-4"
          :loading="loading"
          size="small"
          @click="onPreview"
        >
          Preview
        </VBtn>

        <VBtn
          form="formExport"
          type="submit"
          color="primary"
          class="me-4"
          :loading="loading"
          size="small"
        >
          Download
        </VBtn>
      </template>
    </AppDrawerHeaderSection>

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat v-if="props.isDrawerOpen">
        <VCardText>
          <VForm
            id="formExport"
            ref="refFormExport"
            @submit.prevent="handleSubmit"
          >
            <VRow>
              <VCol cols="12">
                <VSelect
                  density="compact"
                  label="Remove Description"
                  v-model="keepDescription"
                  :items="booleanOptions"
                  item-title="title"
                  item-value="value"
                ></VSelect>
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="quantity"
                  density="compact"
                  label="Quantity"
                  placeholder="20"
                  :rules="[requiredValidator]"
                  type="number"
                  min="1"
                />
              </VCol>

              <VCol cols="12">
                <VSelect
                  density="compact"
                  label="Random"
                  v-model="random"
                  :items="booleanOptions"
                  item-title="title"
                  item-value="value"
                ></VSelect>
              </VCol>

              <VCol cols="6">
                <VSelect
                  density="compact"
                  label="Change Price"
                  v-model="changePrice"
                  :items="booleanOptions"
                  item-title="title"
                  item-value="value"
                ></VSelect>
              </VCol>

              <VCol cols="6">
                <VTextField
                  :disabled="!changePrice"
                  v-model="newPrice"
                  density="compact"
                  label="New Price"
                  placeholder="20.22"
                  :rules="[requiredValidator]"
                  type="number"
                  min="1"
                />
              </VCol>

              <VCol cols="12">
                <VTable>
                  <thead class="bg-secondary">
                    <tr>
                      <td style="width: 100px">Type</td>
                      <td>Name</td>
                      <td style="width: 100px">Price</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="p in selectedProducts"
                      :class="
                        p.Type === 'simple' || p.Type === 'variable'
                          ? 'bg-grey-400'
                          : undefined
                      "
                    >
                      <td>
                        {{ p.Type }}
                      </td>
                      <td>
                        {{ p.Name }}
                      </td>
                      <td>
                        {{ p["Regular price"] }}
                      </td>
                    </tr>
                  </tbody>
                </VTable>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>

  <Alert
    v-model:is-visible="isSnackbarVisible"
    :message="message"
    :type="messageType"
  ></Alert>
</template>
