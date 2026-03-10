<script setup>
import { ref, computed } from 'vue';
// Import icon dari Phosphor
import { PhSignature } from '@phosphor-icons/vue';

// --- STATE ---
const cardTitle = ref('Tanda Tangan Elektronik (TTE)');
const cardText = ref(
  'Sistem terintegrasi untuk memberikan keabsahan pada dokumen digital Anda. Aman, cepat, dan diakui secara hukum oleh Penyelenggara Sertifikasi Elektronik (PSrE).',
);
const hasMedia = ref(true);
const mediaType = ref('icon'); // Kita jadikan icon sebagai default sekarang
const textAlign = ref('center');
const isHorizontal = ref(false);
const copied = ref(false);

const dummyCoverUrl =
  'https://occ-0-7103-64.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABSWBK5knIKLn5TGHvm2tf8mf_ycPLh8jEoARZ-grZqdlW9EG5BNtdNkZYZzHyMWwQAkJrFFQUy1HNygIt8UfA0nr-5qaXilfLA.png?r=880';

// --- COMPUTED CODE SNIPPET ---
const codeSnippet = computed(() => {
  let props = [];

  if (textAlign.value === 'center') props.push('align="center"');
  if (isHorizontal.value) props.push('horizontal');
  if (hasMedia.value && mediaType.value === 'cover') {
    props.push(`\n  imgSrc="${dummyCoverUrl}"`);
    props.push(`\n  imgAlt="Visual"`);
  }

  const propsString =
    props.length > 0
      ? hasMedia.value && mediaType.value === 'cover'
        ? ' ' + props.join(' ') + '\n'
        : ' ' + props.join(' ')
      : '';

  // Jika tipe media adalah icon, kita buat snippet menggunakan slot
  let iconSlot = '';
  if (hasMedia.value && mediaType.value === 'icon') {
    const iconAlignClass = textAlign.value === 'center' ? 'mx-auto' : 'mx-6';
    iconSlot = `\n  <template #image>\n    <PhSignature :size="60" weight="duotone" class="text-[#2FAAE1] mt-8 shrink-0 ${iconAlignClass}" />\n  </template>\n`;
  }

  return `<BaseCard${propsString}>${iconSlot}
  <h5 class="mb-2 text-xl font-bold text-gray-900 leading-snug">
    ${cardTitle.value}
  </h5>
  <p class="mb-4 font-normal text-gray-700 leading-relaxed text-[15px]">
    ${cardText.value}
  </p>
  <BaseButton class="w-fit" text="Read More" />
</BaseCard>`;
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
    class="border border-gray-200 rounded-[24px] overflow-hidden bg-white shadow-sm my-8 font-sans"
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
        >Card Interactive Playground</span
      >
    </div>

    <div
      class="relative min-h-[400px] flex items-center justify-center p-8 md:p-14 bg-slate-50 border-b border-gray-100 transition-all duration-300"
    >
      <div :class="isHorizontal ? 'max-w-3xl w-full' : 'max-w-sm w-full'">
        <BaseCard
          :align="textAlign"
          :horizontal="isHorizontal"
          :imgSrc="hasMedia && mediaType === 'cover' ? dummyCoverUrl : null"
          imgAlt="Visual Cover"
          class="w-full"
        >
          <template #image v-if="hasMedia && mediaType === 'icon'">
            <PhSignature
              :size="64"
              weight="duotone"
              class="text-[#2FAAE1] mt-8 shrink-0"
              :class="textAlign === 'center' ? 'mx-auto' : 'mx-6'"
            />
          </template>

          <h5
            class="mb-2 text-xl font-bold tracking-tight text-gray-900 leading-snug line-clamp-2"
          >
            {{ cardTitle }}
          </h5>
          <p
            class="mb-4 font-normal text-gray-700 leading-relaxed text-[15px] line-clamp-3"
          >
            {{ cardText }}
          </p>
          <div
            :class="
              textAlign === 'center'
                ? 'w-full flex justify-center pt-2'
                : 'mt-auto pt-2'
            "
          >
            <button
              class="bg-[#2FAAE1] hover:bg-[#258bb8] text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-colors w-fit focus:ring-4 focus:ring-[#2FAAE1]/20"
            >
              Read More
            </button>
          </div>
        </BaseCard>
      </div>
    </div>

    <div class="p-8 bg-white flex flex-col gap-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Judul Kartu</label
          >
          <input
            v-model="cardTitle"
            type="text"
            class="w-full rounded-2xl bg-gray-50 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2FAAE1]/20 focus:border-[#2FAAE1] py-3.5 px-5 text-gray-800 border border-gray-100 hover:bg-gray-100/50 transition-colors shadow-inner"
          />
        </div>
        <div>
          <label
            class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3"
            >Deskripsi</label
          >
          <textarea
            v-model="cardText"
            rows="2"
            class="w-full rounded-2xl bg-gray-50 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2FAAE1]/20 focus:border-[#2FAAE1] py-3.5 px-5 text-gray-800 border border-gray-100 hover:bg-gray-100/50 transition-colors resize-none shadow-inner"
          ></textarea>
        </div>
      </div>

      <div>
        <label
          class="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4 text-center"
          >Opsi Tata Letak & Media</label
        >
        <div
          class="p-1.5 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-6 py-4"
        >
          <div class="flex flex-col gap-3 justify-center">
            <span class="text-[12px] font-semibold text-gray-500 text-center"
              >Tampilkan Media</span
            >
            <label
              class="flex items-center justify-center cursor-pointer select-none"
            >
              <div
                class="relative flex items-center justify-center w-[20px] h-[20px]"
              >
                <input
                  type="checkbox"
                  v-model="hasMedia"
                  class="peer appearance-none w-[20px] h-[20px] m-0 rounded border-[1.5px] border-solid border-gray-300 bg-white cursor-pointer checked:bg-[#2FAAE1] checked:border-[#2FAAE1]"
                />
                <svg
                  class="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
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
            </label>
          </div>

          <div
            class="flex flex-col gap-3 items-center"
            :class="{ 'opacity-50 pointer-events-none': !hasMedia }"
          >
            <span class="text-[12px] font-semibold text-gray-500 text-center"
              >Tipe Media</span
            >
            <div
              class="flex bg-gray-200/50 p-1 rounded-lg gap-1 w-full justify-center"
            >
              <button
                @click="mediaType = 'cover'"
                class="px-3 py-1 text-[13px] rounded-md transition-all font-medium flex-1"
                :class="
                  mediaType === 'cover'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                "
              >
                Gambar
              </button>
              <button
                @click="mediaType = 'icon'"
                class="px-3 py-1 text-[13px] rounded-md transition-all font-medium flex-1"
                :class="
                  mediaType === 'icon'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                "
              >
                Ikon
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-3 items-center">
            <span class="text-[12px] font-semibold text-gray-500 text-center"
              >Rata Teks</span
            >
            <div
              class="flex bg-gray-200/50 p-1 rounded-lg gap-1 w-full justify-center"
            >
              <button
                @click="textAlign = 'left'"
                class="px-3 py-1 text-[13px] rounded-md transition-all font-medium flex-1"
                :class="
                  textAlign === 'left'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                "
              >
                Kiri
              </button>
              <button
                @click="textAlign = 'center'"
                class="px-3 py-1 text-[13px] rounded-md transition-all font-medium flex-1"
                :class="
                  textAlign === 'center'
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                "
              >
                Tengah
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-3 justify-center items-center">
            <span class="text-[12px] font-semibold text-gray-500 text-center"
              >Landscape Mode</span
            >
            <label
              class="flex items-center justify-center cursor-pointer select-none"
            >
              <div
                class="relative flex items-center justify-center w-[20px] h-[20px]"
              >
                <input
                  type="checkbox"
                  v-model="isHorizontal"
                  class="peer appearance-none w-[20px] h-[20px] m-0 rounded border-[1.5px] border-solid border-gray-300 bg-white cursor-pointer checked:bg-[#2FAAE1] checked:border-[#2FAAE1]"
                />
                <svg
                  class="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
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
            </label>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative bg-[#161B26] group rounded-b-[24px] border-t border-[#161B26]"
    >
      <button
        @click="copyCode"
        class="absolute top-5 right-5 p-2.5 rounded-xl transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10"
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
      <div class="p-8 pt-6 pr-16 overflow-x-auto">
        <pre
          class="text-[13.5px] font-mono text-gray-300 m-0 whitespace-pre leading-relaxed tracking-wide"
        ><code>{{ codeSnippet }}</code></pre>
      </div>
    </div>
  </div>
</template>
