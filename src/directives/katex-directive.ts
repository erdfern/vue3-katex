import type { Directive } from "vue";
import katex from "katex";
import renderMathInElement from "katex/contrib/auto-render";
import type { VueKatexOptions } from "../types";

export const createKatexDirective = (globalOptions: VueKatexOptions = {}) => {
  const katexDirective: Directive = {
    mounted(el, binding) {
      const localOptions = binding.value?.options || {};
      const allOptions = { ...globalOptions, ...localOptions };

      if (binding.arg === "auto") {
        renderMathInElement(el, allOptions);
      } else {
        const expression = binding.value?.expression || binding.value || "";
        const options = {
          ...allOptions,
          displayMode: binding.arg === "display",
        };
        katex.render(expression, el, options);
      }
    },
  };

  return katexDirective;
};
