<script lang="ts" setup>
import Papa from "papaparse";
import emptyData from "@/assets/images/empty-data.png";
import Alert from "@/components/Alert.vue";

const fileInput = ref<HTMLInputElement | null>(null);
const csvData = ref<any[]>([]);
const isSnackbarVisible = ref<boolean>(false);
const message = ref<string>("");
const messageType = ref<string>("error");

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
    }
  } catch (error) {
    console.log(error);
  }
};

const onChangeSkuId = () => {
  try {
    let id = 0;
    for (let i = 0; i < csvData.value.length; i++) {
      csvData.value[i]["SKU"] = "";
      if (csvData.value[i]["Type"] === "variable") {
        id += 1;
        csvData.value[i]["ID"] = id;
      }
      if (csvData.value[i]["Type"] === "variation") {
        csvData.value[i]["Parent"] = `id:${id}`;
      }
    }
    message.value = "Change SKU / ID Successfully";
    messageType.value = "success";
    isSnackbarVisible.value = true;
  } catch (error) {
    message.value = JSON.stringify(error);
    messageType.value = "error";
    isSnackbarVisible.value = true;
  }
};

const onDownload = () => {
  const csv = Papa.unparse(csvData.value);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "data.csv";
  a.click();

  URL.revokeObjectURL(url);
};
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VCardText>
            <div class="d-flex">
              <VTooltip text="Upload File">
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    icon="ri-upload-2-line"
                    class="rounded"
                    @click="triggerFileInput"
                  ></VBtn>
                </template>
              </VTooltip>

              <VSpacer></VSpacer>

              <div class="d-flex gap-4">
                <VTooltip text="Change SKU / ID">
                  <template #activator="{ props }">
                    <VBtn
                      :disabled="!csvData.length"
                      v-bind="props"
                      icon="mdi-reload"
                      class="rounded"
                      color="warning"
                      @click="onChangeSkuId"
                    ></VBtn>
                  </template>
                </VTooltip>

                <VTooltip text="Download">
                  <template #activator="{ props }">
                    <VBtn
                      :disabled="!csvData.length"
                      v-bind="props"
                      icon="ri-download-2-line"
                      class="rounded"
                      color="info"
                      @click="onDownload"
                    ></VBtn>
                  </template>
                </VTooltip>
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="12">
        <VCard>
          <VCardText>
            <VEmptyState
              v-if="!csvData.length"
              :image="emptyData"
              size="200"
              text-width="250"
            >
              <template v-slot:media>
                <v-img class="mb-8"></v-img>
              </template>

              <template v-slot:title>
                <div class="text-h6 text-high-emphasis">No result Found</div>
              </template>
            </VEmptyState>

            <VTable v-else>
              <thead>
                <tr>
                  <td>Name</td>
                </tr>
              </thead>

              <tbody>
                <tr v-for="data in csvData">
                  <td
                    v-if="
                      data['Type'] === 'simple' || data['Type'] === 'variable'
                    "
                  >
                    {{ data["Name"] }}
                  </td>
                </tr>
              </tbody>
            </VTable>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <input
      @change="handleFileSelect"
      ref="fileInput"
      type="file"
      accept="text/csv"
      hidden
    />

    <Alert
      v-model:is-visible="isSnackbarVisible"
      :message="message"
      :type="messageType"
    ></Alert>
  </div>
</template>
