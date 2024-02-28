import type { App, InjectionKey, Plugin } from "vue";
import { createKatexDirective } from "./directives/katex-directive";
import { VueKatexOptions } from "./types";

const pluginOptionsInjectionKey: InjectionKey<VueKatexOptions> =
  Symbol("vue-katex-options");

const VueKatexPlugin: Plugin = {
  install(app: App, options: VueKatexOptions = {}) {
    app.component("MathRenderer", import("./components/MathRenderer.vue"));

    const katexDirective = createKatexDirective(options);
    app.directive("katex", katexDirective);

    app.provide<VueKatexOptions>(pluginOptionsInjectionKey, options);
  },
};

export default VueKatexPlugin;

export { pluginOptionsInjectionKey };
