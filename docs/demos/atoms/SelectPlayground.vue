<script setup>
import { ref, computed } from 'vue';

// --- STATE ---
const selectedValue = ref('');
const label = ref('Jabatan Pengguna');
const placeholder = ref('Pilih jabatan aktif...');
const hint = ref('Pilih tingkat akses untuk pengguna ini.');
const errorMessage = ref('Jabatan tidak boleh kosong!');
const stateStatus = ref('default'); // 'default', 'success', 'error'
const disabled = ref(false);

// Opsi statis untuk demonstrasi playground
const optionsList = [
  { label: 'Administrator', value: 'admin' },
  { label: 'Verifikator', value: 'verifikator' },
  { label: 'Penerbit Sertifikat', value: 'penerbit' },
  { label: 'Pengguna Biasa', value: 'user' },
];

const copied = ref(false);

// --- COMPUTED CODE SNIPPET ---
const codeSnippet = computed(() => {
  let props = [];

  props.push(`v-model="selectedValue"`);
  props.push(`:options="optionsList"`);

  if (label.value) props.push(`label="${label.value}"`);
  if (placeholder.value && placeholder.value !== 'Pilih salah satu...') {
    props.push(`placeholder="${placeholder.value}"`);
  }
  if (stateStatus.value !== 'default')
    props.push(`state="${stateStatus.value}"`);
  if (hint.value && stateStatus.value !== 'error')
    props.push(`hint="${hint.value}"`);
  if (errorMessage.value && stateStatus.value === 'error')
    props.push(`error-message="${errorMessage.value}"`);
  if (disabled.value) props.push('disabled');

  const propsString =
    props.length > 0 ? '\n  ' + props.join('\n  ') + '\n' : ' ';

  return `<template>
  <BaseSelect${propsString}/>
</template>

<script setup>
import { ref } from 'vue';

const selectedValue = ref('${selectedValue.value}');
const optionsList = [
  { label: 'Administrator', value: 'admin' },
  { label: 'Verifikator', value: 'verifikator' },
  { label: 'Penerbit Sertifikat', value: 'penerbit' },
  { label: 'Pengguna Biasa', value: 'user' }
];
<\/script>`;
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
      class="relative min-h-[320px] flex flex-col items-center justify-center p-12 bg-slate-50/50 border-b border-gray-100"
    >
      <div class="w-full max-w-sm transition-all duration-300">
        <BaseSelect
          v-model="selectedValue"
          :options="optionsList"
          :label="label"
          :placeholder="placeholder"
          :hint="hint"
          :error-message="errorMessage"
          :state="stateStatus"
          :disabled="disabled"
        />
      </div>

      <div
        class="mt-8 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm text-[13px] font-mono text-gray-600 flex items-center gap-2"
      >
        <span class="text-gray-400 select-none">v-model :</span>
        <span
          :class="
            selectedValue ? 'text-[#2FAAE1] font-bold' : 'text-gray-400 italic'
          "
        >
          {{ selectedValue ? `"${selectedValue}"` : 'null (kosong)' }}
        </span>
      </div>
    </div>

    <div class="p-8 bg-white grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <div class="space-y-6">
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
        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Hint Text</label
          >
          <input
            v-model="hint"
            type="text"
            :disabled="stateStatus === 'error'"
            :class="
              stateStatus === 'error' ? 'opacity-50 cursor-not-allowed' : ''
            "
            class="w-full rounded-xl bg-gray-50 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#2FAAE1] py-3 px-4 text-gray-700 border border-gray-100 hover:bg-gray-100/50 transition-colors"
          />
        </div>
      </div>

      <div class="space-y-6">
        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Form State</label
          >
          <div
            class="flex bg-gray-50 rounded-full border border-gray-100 p-1 w-fit gap-0.5"
          >
            <button
              @click="stateStatus = 'default'"
              class="px-4 py-2 text-[13px] rounded-full transition-all duration-200 font-medium"
              :class="
                stateStatus === 'default'
                  ? 'bg-white text-gray-800 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-800'
              "
            >
              Default
            </button>
            <button
              @click="stateStatus = 'success'"
              class="px-4 py-2 text-[13px] rounded-full transition-all duration-200 font-medium"
              :class="
                stateStatus === 'success'
                  ? 'bg-white text-green-600 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-green-600'
              "
            >
              Success
            </button>
            <button
              @click="stateStatus = 'error'"
              class="px-4 py-2 text-[13px] rounded-full transition-all duration-200 font-medium"
              :class="
                stateStatus === 'error'
                  ? 'bg-white text-red-600 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-red-600'
              "
            >
              Error
            </button>
          </div>
        </div>

        <div
          :class="
            stateStatus === 'error' ? 'block' : 'opacity-30 pointer-events-none'
          "
        >
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Error Message</label
          >
          <input
            v-model="errorMessage"
            type="text"
            class="w-full rounded-xl bg-gray-50 text-[15px] focus:outline-none focus:ring-1 focus:ring-red-400 py-3 px-4 text-gray-700 border border-gray-100 transition-colors"
          />
        </div>

        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Behaviors</label
          >
          <label
            class="flex items-center w-fit gap-3 cursor-pointer select-none bg-white border border-gray-200 py-2.5 px-4 rounded-xl hover:border-gray-300 shadow-sm transition-colors"
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
              >Disabled State</span
            >
          </label>
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
