<template>
  <div v-html="renderedMath"></div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { type KatexOptions, renderToString } from "katex";
import type { VueKatexOptions } from "../types";
import { pluginOptionsInjectionKey } from "../plugin";

interface MathRendererProps {
  expression: string;
  options?: KatexOptions;
}
const props = defineProps<MathRendererProps>();

const globalOptions = inject(pluginOptionsInjectionKey);
const options = { ...globalOptions, ...props.options };
const renderedMath = computed(() => renderToString(props.expression, options));
</script>
