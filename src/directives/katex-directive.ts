import { render } from "katex";
import renderMathInElement from "katex/contrib/auto-render";
import type { KatexDirective, VueKatexOptions } from "../types";

export const createKatexDirective = (globalOptions: VueKatexOptions = {}) => {
  const katexDirective: KatexDirective = {
    mounted(el, binding) {
      const localOptions = binding.value.options || {};
      const allOptions = { ...globalOptions, ...localOptions };

      if (binding.arg === "auto") {
        renderMathInElement(el, allOptions);
      } else {
        const expression = binding.value.expression || "";
        const options = {
          ...allOptions,
          displayMode: binding.arg === "display",
        };
        render(expression, el, options);
      }
    },
  };

  return katexDirective;
};
