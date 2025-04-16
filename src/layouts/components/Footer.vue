<script lang="ts" setup>
import { errors } from "@/plugins/axios";
import type { ErrorResponse } from "@/types";
import Alert from "@/components/Alert.vue";

const isSnackbarVisible = ref<boolean>(false);
const message = ref<string>("");
const messageType = ref<string>("error");

watch(
  () => errors.value,
  (error) => {
    const { response } = error as ErrorResponse;
    if(response) {
      const { data } = response;
      if(data) {
        message.value = data.title || "Something went wrong.";
      } else {
        message.value = "Something went wrong.";
      }

      if (data.errors) {
        Object.entries(data.errors).forEach(([key, value]) => {
          message.value = `${key}: ${value}`;
        });
      }
    } else {
      message.value = "Something went wrong.";
    }

    isSnackbarVisible.value = true;
    messageType.value = "error";
  },
);
</script>

<template>
  <div>
    <Alert
      v-model:is-visible="isSnackbarVisible"
      :message="message"
      :type="messageType"
    ></Alert>
  </div>
</template>
