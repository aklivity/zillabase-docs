<script setup lang="ts">
import { ApiReference } from "@scalar/api-reference";
import "@scalar/api-reference/style.css";
import { getCurrentInstance, computed } from "vue";

const instance = getCurrentInstance();
const isDarkMode = computed(() => !!instance?.proxy?.$isDarkmode || false);
</script>

<style lang="css">
/* :root {
  --content-width: 1280px !important;
} */

/* these styles, although taken from theme for scalar docusaurus but somehow fixed dark/light mode inconsistency bug in scalar */
html[data-theme='light'] body,
html[data-theme='light'] .scalar-card.dark-mode {
  --scalar-color-1: var(--ifm-font-color-base, #1c1e21);
  --scalar-color-2: var(--ifm-color-emphasis-700, #606770);
  --scalar-color-3: var(--ifm-color-emphasis-600, #8d949e);
  --scalar-color-accent: var(--ifm-menu-color-active, #277148);

  --scalar-background-1: color-mix(
    in srgb,
    var(--ifm-background-color, #fff) 0%,
    white
  );
  --scalar-background-2: color-mix(in srgb, rgba(0, 0, 0, 1) 4%, white);
  --scalar-background-3: color-mix(in srgb, rgba(0, 0, 0, 1) 8%, white);
  --scalar-background-accent: var(
    --ifm-menu-color-background-active,
    rgba(0, 0, 0, 0.05)
  );

  --scalar-border-color: var(--ifm-color-emphasis-300, #ebedf0);

  --scalar-color-green: #00a400;
  --scalar-color-red: #fa383e;
  --scalar-color-yellow: #ffba00;
  --scalar-color-blue: #0082d0;
  --scalar-color-orange: #fb892c;
  --scalar-color-purple: #5203d1;
  --scalar-button-1: rgba(0, 0, 0, 1);
  --scalar-button-1-hover: rgba(0, 0, 0, 0.8);
  --scalar-button-1-color: rgba(255, 255, 255, 0.9);
}

html[data-theme='dark'] body,
.scalar-card.dark-mode {
  --scalar-color-1: var(--ifm-font-color-base, rgb(227, 227, 227));
  --scalar-color-2: var(--ifm-color-emphasis-700, #dadde1);
  --scalar-color-3: var(--ifm-color-emphasis-400, #8d949e);
  --scalar-color-accent: var(--ifm-menu-color-active, #1fa588);

  --scalar-background-1: var(--ifm-background-color, #1b1b1d);
  --scalar-background-2: color-mix(
    in srgb,
    rgba(255, 255, 255, 1) 6%,
    var(--ifm-background-color)
  );
  --scalar-background-3: color-mix(
    in srgb,
    rgba(255, 255, 255, 1) 12%,
    var(--ifm-background-color)
  );
  --scalar-background-accent: var(
    --ifm-menu-color-background-active,
    hsla(0, 0%, 100%, 0.05)
  );

  --scalar-border-color: var(--ifm-color-emphasis-200, #444950);

  --scalar-color-green: #00a400;
  --scalar-color-red: #fa383e;
  --scalar-color-yellow: #ffba00;
  --scalar-color-blue: #3578e5;
  --scalar-color-orange: #ff8d4d;
  --scalar-color-purple: #b191f9;
}
</style>

<template>
  <ClientOnly>
    <ApiReference
      :configuration="{
        spec: {
          url: 'https://raw.githubusercontent.com/aklivity/zillabase/refs/heads/feature/local-platform-api/api/openapi.yaml',
        },
        isEditable: false,
        hideDarkModeToggle: true,
        darkMode: isDarkMode,
        hideClientButton: true,
        hideModels: true,
      }"
    />
  </ClientOnly>
</template>
