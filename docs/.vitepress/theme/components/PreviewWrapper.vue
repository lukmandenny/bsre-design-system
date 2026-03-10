<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default Preview',
  },
});
</script>

<template>
  <div class="preview-container mt-10">
    <div class="header-bar">
      <div class="flex items-center gap-2">
        <span class="text-xs font-semibold text-gray-500 tracking-tight">
          {{ title }}
        </span>
      </div>
    </div>

    <div class="canvas">
      <div
        class="relative z-10 w-full flex flex-wrap justify-center items-center gap-4 py-12 px-8"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.preview-container {
  border: 1px solid #e5e7eb;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background-color: #ffffff;
  overflow: hidden;
}

.header-bar {
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: #f9fafb;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.canvas {
  position: relative;
  background-color: #ffffff; /* Latar belakang putih polos */
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
