<script setup>
import { ref, computed } from 'vue';
// Import beberapa ikon untuk didemokan
import {
  PhHouse,
  PhUser,
  PhTrash,
  PhGear,
  PhCheckCircle,
} from '@phosphor-icons/vue';

// --- STATE ---
// Kita simpan nama dan komponennya agar mudah di-render
const iconOptions = [
  { name: 'House', component: PhHouse },
  { name: 'User', component: PhUser },
  { name: 'Gear', component: PhGear },
  { name: 'CheckCircle', component: PhCheckCircle },
  { name: 'Trash', component: PhTrash },
];

const selectedIcon = ref(iconOptions[0]);
const sizeValue = ref('xl');
const colorTheme = ref('primary');
const weightValue = ref('duotone');
const copied = ref(false);

const sizeOptions = ['sm', 'md', 'lg', 'xl'];
const colorOptions = [
  'default',
  'primary',
  'success',
  'danger',
  'warning',
  'info',
  'gray',
];
const weightOptions = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

// --- COMPUTED CODE SNIPPET ---
const codeSnippet = computed(() => {
  let props = [];

  // Memasukkan prop icon
  props.push(`:icon="Ph${selectedIcon.value.name}"`);

  if (sizeValue.value !== 'md') props.push(`size="${sizeValue.value}"`);
  if (colorTheme.value !== 'default') props.push(`color="${colorTheme.value}"`);
  if (weightValue.value !== 'regular')
    props.push(`weight="${weightValue.value}"`);

  const propsString =
    props.length > 1
      ? '\n    ' + props.join('\n    ') + '\n  '
      : ` ${props[0]} `;

  return `<script setup>
import { Ph${selectedIcon.value.name} } from '@phosphor-icons/vue';
<\/script>

<template>
  <BaseIcon${propsString}/>
</template>`;
});

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(codeSnippet.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};
</script>

<template>
  <div
    class="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm my-8 font-sans"
  >
    <div
      class="px-6 py-4 border-b border-gray-100 flex items-center gap-2 bg-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 256 256"
        class="text-gray-500"
      >
        <path
          d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56ZM40,200V88H216V200Zm96-72a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H144A8,8,0,0,1,136,128Zm0,32a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H144A8,8,0,0,1,136,160ZM64,128a16,16,0,1,1,16,16A16,16,0,0,1,64,128Zm0,32a16,16,0,1,1,16,16A16,16,0,0,1,64,160Z"
        ></path>
      </svg>
      <span class="text-[15px] font-bold text-gray-700"
        >Interactive Playground</span
      >
    </div>

    <div
      class="relative min-h-[220px] flex flex-col items-center justify-center p-12 bg-slate-50/50 border-b border-gray-100"
    >
      <div class="transition-all duration-300 transform hover:scale-110">
        <BaseIcon
          :icon="selectedIcon.component"
          :size="sizeValue"
          :color="colorTheme"
          :weight="weightValue"
        />
      </div>
    </div>

    <div class="p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <div class="space-y-6">
        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Pilih Ikon</label
          >
          <div class="flex flex-wrap gap-2">
            <button
              v-for="item in iconOptions"
              :key="item.name"
              @click="selectedIcon = item"
              :class="[
                'px-3 py-2 rounded-lg text-[13px] font-medium border transition-all flex items-center gap-2',
                selectedIcon.name === item.name
                  ? 'bg-[#2FAAE1]/10 text-[#2FAAE1] border-[#2FAAE1]/30 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50',
              ]"
            >
              <component :is="item.component" class="w-4 h-4" />
              {{ item.name }}
            </button>
          </div>
        </div>

        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Ukuran (Size)</label
          >
          <div
            class="flex bg-gray-50 rounded-full border border-gray-100 p-1 w-fit gap-0.5"
          >
            <button
              v-for="size in sizeOptions"
              :key="size"
              @click="sizeValue = size"
              class="px-4 py-2 text-[13px] rounded-full transition-all duration-200 font-medium"
              :class="
                sizeValue === size
                  ? 'bg-white text-[#2FAAE1] shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-800'
              "
            >
              {{ size }}
            </button>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Warna (Color)</label
          >
          <div class="flex flex-wrap gap-2">
            <button
              v-for="color in colorOptions"
              :key="color"
              @click="colorTheme = color"
              :class="[
                'px-3 py-1.5 rounded-lg text-[13px] font-medium border transition-all capitalize',
                colorTheme === color
                  ? 'bg-gray-800 text-white border-gray-800 shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50',
              ]"
            >
              {{ color }}
            </button>
          </div>
        </div>

        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Ketebalan (Weight)</label
          >
          <div class="flex flex-wrap gap-2">
            <button
              v-for="weight in weightOptions"
              :key="weight"
              @click="weightValue = weight"
              :class="[
                'px-3 py-1.5 rounded-lg text-[13px] font-medium border transition-all capitalize',
                weightValue === weight
                  ? 'bg-gray-800 text-white border-gray-800 shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50',
              ]"
            >
              {{ weight }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative bg-[#161B26] group rounded-b-2xl border-t border-[#161B26]"
    >
      <button
        @click="copyCode"
        class="absolute top-4 right-4 p-2 rounded-md transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10"
        :title="copied ? 'Copied!' : 'Copy code'"
      >
        <svg
          v-if="copied"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4ade80"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path
            d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
          ></path>
        </svg>
      </button>
      <div class="p-6 pt-6 pr-14 overflow-x-auto">
        <pre
          class="text-[14px] font-mono text-gray-300 m-0 whitespace-pre leading-relaxed tracking-wide"
        ><code>{{ codeSnippet }}</code></pre>
      </div>
    </div>
  </div>
</template>
