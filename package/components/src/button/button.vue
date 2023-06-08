<template>
  <button class="ljf-button" :class="buttonStyle"><slot></slot></button>
</template>
<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "ljf-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return { [`ljf-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
