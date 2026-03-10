<script setup>
import { ref, computed, watch } from 'vue';

// --- STATE ---
const label = ref('Alamat Email');
const placeholder = ref('nama@bsre.bssn.go.id');
const inputValue = ref('');
const type = ref('email');
const size = ref('md');
const validationState = ref('default');
const disabled = ref(false);
const readonly = ref(false);
const copied = ref(false);

// --- OPTIONS ---
const types = ['text', 'email', 'password', 'number'];
const sizes = ['sm', 'md', 'lg'];
const states = ['default', 'success', 'error'];

// --- SMART WATCHER: Auto-fill saat tipe berubah ---
watch(type, (newType) => {
  if (newType === 'password') {
    label.value = 'Kata Sandi';
    placeholder.value = 'Masukkan kata sandi...';
    inputValue.value = 'rahasia123!@#';
  } else if (newType === 'email') {
    label.value = 'Alamat Email';
    placeholder.value = 'nama@bsre.bssn.go.id';
    inputValue.value = '';
  } else if (newType === 'number') {
    label.value = 'Nomor Induk Kependudukan (NIK)';
    placeholder.value = '3276000000000000';
    inputValue.value = '';
  } else {
    label.value = 'Nama Lengkap';
    placeholder.value = 'Masukkan nama Anda...';
    inputValue.value = '';
  }
});

// --- COMPUTED CODE SNIPPET ---
const codeSnippet = computed(() => {
  let props = [];

  if (label.value) props.push(`label="${label.value}"`);
  if (type.value !== 'text') props.push(`type="${type.value}"`);
  if (placeholder.value) props.push(`placeholder="${placeholder.value}"`);
  if (size.value !== 'md') props.push(`size="${size.value}"`);
  if (validationState.value !== 'default')
    props.push(`state="${validationState.value}"`);

  // Tambahkan hint/error otomatis berdasarkan state di snippet
  if (validationState.value === 'success') props.push(`hint="Data valid."`);
  if (validationState.value === 'error')
    props.push(`error-message="Format tidak sesuai."`);

  if (disabled.value) props.push('disabled');
  if (readonly.value) props.push('readonly');

  const propsString =
    props.length > 0 ? '\n  ' + props.join('\n  ') + '\n' : ' ';

  return `<BaseInput\n  v-model="inputValue"${propsString}/>`;
});

// --- ACTION: COPY TO CLIPBOARD ---
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
      class="relative min-h-[300px] flex items-center justify-center p-8 bg-white border-b border-gray-100"
    >
      <div class="w-full max-w-md">
        <BaseInput
          v-model="inputValue"
          :label="label"
          :type="type"
          :placeholder="placeholder"
          :size="size"
          :state="validationState"
          :disabled="disabled"
          :readonly="readonly"
          :hint="validationState === 'success' ? 'Data valid.' : ''"
          :error-message="
            validationState === 'error' ? 'Format tidak sesuai.' : ''
          "
        />
      </div>
    </div>

    <div class="p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <div class="space-y-6">
        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Input Type</label
          >
          <div class="relative">
            <select
              v-model="type"
              class="w-full appearance-none rounded-xl bg-gray-50 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#2FAAE1] py-3 pl-4 pr-10 text-gray-700 cursor-pointer border border-gray-100 hover:bg-gray-100/50 transition-colors"
            >
              <option v-for="t in types" :key="t" :value="t">{{ t }}</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Label Text</label
          >
          <input
            v-model="label"
            type="text"
            class="w-full rounded-xl bg-gray-50 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#2FAAE1] py-3 px-4 text-gray-700 border border-gray-100 hover:bg-gray-100/50 transition-colors"
          />
        </div>

        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Placeholder</label
          >
          <input
            v-model="placeholder"
            type="text"
            class="w-full rounded-xl bg-gray-50 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#2FAAE1] py-3 px-4 text-gray-700 border border-gray-100 hover:bg-gray-100/50 transition-colors"
          />
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Size</label
          >
          <div
            class="flex bg-gray-50 rounded-full border border-gray-100 p-1 w-fit gap-0.5"
          >
            <button
              v-for="s in sizes"
              :key="s"
              @click="size = s"
              class="px-5 py-2 text-[13px] rounded-full transition-all duration-200 uppercase tracking-wider font-medium"
              :class="
                size === s
                  ? 'bg-white text-[#2FAAE1] shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-800 border border-transparent hover:bg-gray-100'
              "
            >
              {{ s }}
            </button>
          </div>
        </div>

        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Validation State</label
          >
          <div
            class="flex bg-gray-50 rounded-full border border-gray-100 p-1 w-fit gap-0.5"
          >
            <button
              v-for="st in states"
              :key="st"
              @click="validationState = st"
              class="px-4 py-2 text-[13px] rounded-full transition-all duration-200 capitalize font-medium"
              :class="
                validationState === st
                  ? 'bg-white text-[#2FAAE1] shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-800 border border-transparent hover:bg-gray-100'
              "
            >
              {{ st }}
            </button>
          </div>
        </div>

        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Behaviors</label
          >
          <div class="grid grid-cols-2 gap-3">
            <label
              class="flex items-center gap-3 cursor-pointer select-none bg-white border border-gray-200 py-2.5 px-4 rounded-xl hover:border-gray-300 shadow-sm"
            >
              <div
                class="relative flex items-center justify-center w-[18px] h-[18px]"
              >
                <input
                  type="checkbox"
                  v-model="disabled"
                  class="peer appearance-none w-[18px] h-[18px] m-0 rounded border-[1.5px] border-solid border-gray-300 bg-white cursor-pointer checked:bg-[#2FAAE1] checked:border-[#2FAAE1]"
                />
                <svg
                  class="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="text-[14px] text-gray-700 font-medium"
                >Disabled</span
              >
            </label>

            <label
              class="flex items-center gap-3 cursor-pointer select-none bg-white border border-gray-200 py-2.5 px-4 rounded-xl hover:border-gray-300 shadow-sm"
            >
              <div
                class="relative flex items-center justify-center w-[18px] h-[18px]"
              >
                <input
                  type="checkbox"
                  v-model="readonly"
                  class="peer appearance-none w-[18px] h-[18px] m-0 rounded border-[1.5px] border-solid border-gray-300 bg-white cursor-pointer checked:bg-[#2FAAE1] checked:border-[#2FAAE1]"
                />
                <svg
                  class="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span class="text-[14px] text-gray-700 font-medium"
                >Readonly</span
              >
            </label>
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
