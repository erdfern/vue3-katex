**vue3-katex**

A Vue 3.x plugin to render typeset math using the KaTeX library.

**Features**

* **Convenient Component:** The `MathRenderer` component offers easy math integration.
* **Customizable Directive:** Fine-tune math rendering with the `katex` directive for inline and display modes.
* **Auto Rendering:** Use the directive with `:auto` to automatically render math within delimiters. 
* **Global Configuration:** Set plugin-wide KaTeX options using `provide`.

**Installation**

vue3-katex requires `katex` and `vue3` as peer dependencies

```bash
npm install vue3-katex katex vue@3
```

In your app entry point, install the `VueKatexPlugin` with optional global configuration
```typescript
import {VueKatexPlugin, VueKatexOptions } from "vue3-katex"
// ...

const app = createApp(App)

const globalKatexOptions: VueKatexOptions {
  // ...
}

app.use(VueKatexPlugin, globalKatexOptions)

app.mount("#app")
````

**Basic Usage**

* **MathRenderer Component:**

```vue
<template>
  <MathRenderer :expression="'\\int_0^{\\infty} x^2 dx'" />
</template>
```

* **katex Directive (Inline):** 

```vue
<template>
  <div v-katex="{ expression: myExpression }"></div>
</template>

<script setup>
import { ref } from 'vue';
const myExpression = ref('x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}');
</script>
```

* **katex Directive (Display Mode):**

```vue
<div v-katex:display="{ expression: 'f(x) = \\int_{-\infty}^\infty \\hat f(\\xi)\\,e^{2 \\pi i \\xi x} \\,d\\xi' }"></div>
```

* **katex Directive (Auto Rendering):** 

```vue
<div v-katex:auto="{ delimiters: {left: '\\(', right: '\\)', display: true} }">
  \(i = \sqrt{-1}\)
</div>
```

**Configuration**

For details on the supported KaTeX options and additional configuration, please refer to the full (documentation)[https://katex.org/docs/options] and the additional options for (Auto-Rendering)[https://katex.org/docs/autorender].

**License**

MIT
