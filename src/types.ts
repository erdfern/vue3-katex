import type { RenderMathInElementOptions } from "katex/contrib/auto-render";
import { Directive } from "vue";

export interface VueKatexOptions extends RenderMathInElementOptions {}

export interface KatexDirectiveValue {
  expression?: string;
  options?: VueKatexOptions;
}

export type KatexDirective = Directive<HTMLElement, KatexDirectiveValue>;
