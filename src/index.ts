import "katex/dist/katex.min.css"

export { default as VueKatexPlugin, pluginOptionsInjectionKey } from "./plugin";
export { default as MathRenderer } from "./components/MathRenderer.vue";
export type { VueKatexOptions, KatexDirective, KatexDirectiveValue } from "./types";
