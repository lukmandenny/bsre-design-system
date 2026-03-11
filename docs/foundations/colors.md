# Colors

**BSrE Design System** menggunakan warna secara terarah untuk **menata hierarki informasi, menyampaikan pesan, dan menyorot interaksi penting di layar**. Melalui penerapan palet warna yang terstandarisasi dan rasio kontras yang optimal, panduan ini dirancang untuk menghasilkan antarmuka yang secara visual mudah dicerna dan mencegah kebingungan navigasi.

## Default Color Palette

<div class="tip custom-block" style="padding-top: 8px">
  <p class="custom-block-title">💡 Klik untuk Copy</p>
  <p>Arahkan kursor dan <b>klik pada palet warna</b> di bawah ini untuk menyalin kode HEX secara otomatis!</p>
</div>

<div class="mt-8 flex flex-col">

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Base / Surfaces</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.base</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#FFFFFF'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-gray-200 transition-transform group-hover:scale-105 bg-base-white"></div>
        <div class="text-[11px] font-bold text-gray-900">White</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FFFFFF</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#111827'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-base-black"></div>
        <div class="text-[11px] font-bold text-gray-900">Black</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#111827</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Gray</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.gray</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#F9FAFB'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-50"></div>
        <div class="text-[11px] font-bold text-gray-900">50</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F9FAFB</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F3F4F6'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-100"></div>
        <div class="text-[11px] font-bold text-gray-900">100</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F3F4F6</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#E5E7EB'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-200"></div>
        <div class="text-[11px] font-bold text-gray-900">200</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#E5E7EB</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#D1D5DB'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-300"></div>
        <div class="text-[11px] font-bold text-gray-900">300</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#D1D5DB</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#9CA3AF'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-400"></div>
        <div class="text-[11px] font-bold text-gray-900">400</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#9CA3AF</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#6B7280'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-500"></div>
        <div class="text-[11px] font-bold text-gray-900">500</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#6B7280</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#4B5563'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-600"></div>
        <div class="text-[11px] font-bold text-gray-900">600</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#4B5563</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#374151'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-700"></div>
        <div class="text-[11px] font-bold text-gray-900">700</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#374151</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#1F2937'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-800"></div>
        <div class="text-[11px] font-bold text-gray-900">800</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#1F2937</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#111827'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-gray-900', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-gray-900', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-gray-900"></div>
        <div class="text-[11px] font-bold text-gray-900">900</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#111827</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Blue (Primary)</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.primary</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#EAF6FC'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-50"></div>
        <div class="text-[11px] font-bold text-gray-900">50</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#EAF6FC</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#D5EEF9'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-100"></div>
        <div class="text-[11px] font-bold text-gray-900">100</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#D5EEF9</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#B5E0F4'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-200"></div>
        <div class="text-[11px] font-bold text-gray-900">200</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#B5E0F4</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#8FD0EE'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-300"></div>
        <div class="text-[11px] font-bold text-gray-900">300</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#8FD0EE</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#6DC3EA'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-400"></div>
        <div class="text-[11px] font-bold text-gray-900">400</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#6DC3EA</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#2FAAE1'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-md mb-2 border-2 border-primary-500 transition-transform group-hover:scale-105 bg-primary-500"></div>
        <div class="text-[11px] font-bold text-primary-500">500</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#2FAAE1</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#2588B4'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-600"></div>
        <div class="text-[11px] font-bold text-gray-900">600</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#2588B4</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#1A668A'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-700"></div>
        <div class="text-[11px] font-bold text-gray-900">700</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#1A668A</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#12445A'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-800"></div>
        <div class="text-[11px] font-bold text-gray-900">800</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#12445A</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#0E3343'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-primary-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-primary-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-primary-900"></div>
        <div class="text-[11px] font-bold text-gray-900">900</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#0E3343</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Red (Danger)</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.danger</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#FBE7EC'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-50"></div>
        <div class="text-[11px] font-bold text-gray-900">50</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FBE7EC</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F7D0D9'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-100"></div>
        <div class="text-[11px] font-bold text-gray-900">100</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F7D0D9</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F0A6B8'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-200"></div>
        <div class="text-[11px] font-bold text-gray-900">200</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F0A6B8</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#E45C7C'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-300"></div>
        <div class="text-[11px] font-bold text-gray-900">300</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#E45C7C</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#DB3A60'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-400"></div>
        <div class="text-[11px] font-bold text-gray-900">400</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#DB3A60</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#D91744'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-md mb-2 border-2 border-danger-500 transition-transform group-hover:scale-105 bg-danger-500"></div>
        <div class="text-[11px] font-bold text-danger-500">500</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#D91744</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#AD1236'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-600"></div>
        <div class="text-[11px] font-bold text-gray-900">600</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#AD1236</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#820D29'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-700"></div>
        <div class="text-[11px] font-bold text-gray-900">700</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#820D29</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#56091B'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-800"></div>
        <div class="text-[11px] font-bold text-gray-900">800</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#56091B</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#410614'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-danger-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-danger-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-danger-900"></div>
        <div class="text-[11px] font-bold text-gray-900">900</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#410614</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Yellow (Warning)</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.warning</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#FEF5E6'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-50"></div>
        <div class="text-[11px] font-bold text-gray-900">50</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FEF5E6</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#FDE8CE'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-100"></div>
        <div class="text-[11px] font-bold text-gray-900">100</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FDE8CE</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#FBD49F'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-200"></div>
        <div class="text-[11px] font-bold text-gray-900">200</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FBD49F</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F8BB54'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-300"></div>
        <div class="text-[11px] font-bold text-gray-900">300</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F8BB54</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F6AC2C'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-400"></div>
        <div class="text-[11px] font-bold text-gray-900">400</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F6AC2C</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F59E0B'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-md mb-2 border-2 border-warning-500 transition-transform group-hover:scale-105 bg-warning-500"></div>
        <div class="text-[11px] font-bold text-warning-500">500</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F59E0B</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#C47E08'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-600"></div>
        <div class="text-[11px] font-bold text-gray-900">600</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#C47E08</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#935E06'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-700"></div>
        <div class="text-[11px] font-bold text-gray-900">700</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#935E06</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#623F04'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-800"></div>
        <div class="text-[11px] font-bold text-gray-900">800</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#623F04</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#492F03'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-warning-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-warning-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-warning-900"></div>
        <div class="text-[11px] font-bold text-gray-900">900</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#492F03</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Green (Success)</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.success</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#E7F8F2'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-50"></div>
        <div class="text-[11px] font-bold text-gray-900">50</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#E7F8F2</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#CFF1E5'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-100"></div>
        <div class="text-[11px] font-bold text-gray-900">100</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#CFF1E5</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#9DE3CB'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-200"></div>
        <div class="text-[11px] font-bold text-gray-900">200</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#9DE3CB</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#57CEA6'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-300"></div>
        <div class="text-[11px] font-bold text-gray-900">300</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#57CEA6</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#33C393'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-400"></div>
        <div class="text-[11px] font-bold text-gray-900">400</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#33C393</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#10B981'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-md mb-2 border-2 border-success-500 transition-transform group-hover:scale-105 bg-success-500"></div>
        <div class="text-[11px] font-bold text-success-500">500</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#10B981</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#0C9467'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-600"></div>
        <div class="text-[11px] font-bold text-gray-900">600</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#0C9467</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#096F4D'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-700"></div>
        <div class="text-[11px] font-bold text-gray-900">700</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#096F4D</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#064A33'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-800"></div>
        <div class="text-[11px] font-bold text-gray-900">800</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#064A33</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#043726'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-success-500', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-success-500', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-success-900"></div>
        <div class="text-[11px] font-bold text-gray-900">900</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#043726</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Indigo</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.indigo</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#EEF2FF'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-50"></div>
        <div class="text-[11px] font-bold text-gray-900">50</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#EEF2FF</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#E0E7FF'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-100"></div>
        <div class="text-[11px] font-bold text-gray-900">100</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#E0E7FF</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#C7D2FE'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-200"></div>
        <div class="text-[11px] font-bold text-gray-900">200</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#C7D2FE</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#A5B4FC'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-300"></div>
        <div class="text-[11px] font-bold text-gray-900">300</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#A5B4FC</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#818CF8'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-400"></div>
        <div class="text-[11px] font-bold text-gray-900">400</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#818CF8</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#6366F1'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-md mb-2 border-2 border-indigo-500 transition-transform group-hover:scale-105 bg-indigo-500"></div>
        <div class="text-[11px] font-bold text-indigo-500">500</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#6366F1</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#4F46E5'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-600"></div>
        <div class="text-[11px] font-bold text-gray-900">600</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#4F46E5</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#4338CA'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-700"></div>
        <div class="text-[11px] font-bold text-gray-900">700</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#4338CA</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#3730A3'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-800"></div>
        <div class="text-[11px] font-bold text-gray-900">800</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#3730A3</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#312E81'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-indigo-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-indigo-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-indigo-900"></div>
        <div class="text-[11px] font-bold text-gray-900">900</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#312E81</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Purple</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.purple</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#FAF5FF'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-50"></div>
        <div class="text-[11px] font-bold text-gray-900">50</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FAF5FF</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F3E8FF'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-100"></div>
        <div class="text-[11px] font-bold text-gray-900">100</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F3E8FF</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#E9D5FF'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-200"></div>
        <div class="text-[11px] font-bold text-gray-900">200</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#E9D5FF</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#D8B4FE'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-300"></div>
        <div class="text-[11px] font-bold text-gray-900">300</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#D8B4FE</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#C084FC'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-400"></div>
        <div class="text-[11px] font-bold text-gray-900">400</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#C084FC</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#A855F7'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-md mb-2 border-2 border-purple-500 transition-transform group-hover:scale-105 bg-purple-500"></div>
        <div class="text-[11px] font-bold text-purple-500">500</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#A855F7</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#9333EA'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-600"></div>
        <div class="text-[11px] font-bold text-gray-900">600</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#9333EA</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#7E22CE'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-700"></div>
        <div class="text-[11px] font-bold text-gray-900">700</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#7E22CE</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#6B21A8'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-800"></div>
        <div class="text-[11px] font-bold text-gray-900">800</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#6B21A8</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#581C87'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-purple-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-purple-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-purple-900"></div>
        <div class="text-[11px] font-bold text-gray-900">900</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#581C87</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col xl:flex-row items-start py-6 border-b border-gray-100">
    <div class="w-full xl:w-48 flex-shrink-0 mb-4 xl:mb-0">
      <h3 class="text-base font-bold text-gray-900 !mt-0 !mb-1">Pink</h3>
      <code class="text-[11px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">colors.pink</code>
    </div>
    <div class="flex flex-wrap gap-2 sm:gap-3 w-full">
      <div onclick="navigator.clipboard.writeText('#FDF2F8'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-50"></div>
        <div class="text-[11px] font-bold text-gray-900">50</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FDF2F8</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#FCE7F3'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-100"></div>
        <div class="text-[11px] font-bold text-gray-900">100</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FCE7F3</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#FBCFE8'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-200"></div>
        <div class="text-[11px] font-bold text-gray-900">200</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#FBCFE8</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F9A8D4'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-300"></div>
        <div class="text-[11px] font-bold text-gray-900">300</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F9A8D4</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#F472B6'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-400"></div>
        <div class="text-[11px] font-bold text-gray-900">400</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#F472B6</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#EC4899'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-md mb-2 border-2 border-pink-500 transition-transform group-hover:scale-105 bg-pink-500"></div>
        <div class="text-[11px] font-bold text-pink-500">500</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#EC4899</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#DB2777'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-600"></div>
        <div class="text-[11px] font-bold text-gray-900">600</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#DB2777</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#BE185D'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-700"></div>
        <div class="text-[11px] font-bold text-gray-900">700</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#BE185D</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#9D174D'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-800"></div>
        <div class="text-[11px] font-bold text-gray-900">800</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#9D174D</div>
      </div>
      <div onclick="navigator.clipboard.writeText('#831843'); let h = this.querySelector('.hex-text'); let o = h.innerText; h.innerText = 'Copied!'; h.classList.add('text-pink-600', 'font-bold'); setTimeout(() => { h.innerText = o; h.classList.remove('text-pink-600', 'font-bold'); }, 1500);" class="group cursor-pointer flex flex-col w-[18%] sm:w-[8%] md:w-14">
        <div class="h-12 w-full rounded-lg shadow-sm mb-2 border border-black/5 transition-transform group-hover:scale-105 bg-pink-900"></div>
        <div class="text-[11px] font-bold text-gray-900">900</div><div class="hex-text text-[10px] text-gray-500 uppercase transition-all duration-300">#831843</div>
      </div>
    </div>
  </div>

</div>

## Panduan Semantik (Semantic Guidelines)

Setiap warna dalam **BSrE Design System** memiliki makna dan tujuan spesifik. Penggunaan warna secara semantik membantu menjaga konsistensi dan memudahkan pengguna memahami antarmuka tanpa harus membaca teks.

<div class="overflow-x-auto mt-6 mb-12"><table class="w-full text-left border-collapse bg-white !m-0" style="margin: 0 !important;">
    <thead class="bg-gray-50/50">
      <tr class="border-b border-gray-200">
        <th class="py-3 px-4 font-bold text-sm text-gray-900 w-16 text-center">Warna</th>
        <th class="py-3 px-4 font-bold text-sm text-gray-900 w-32 whitespace-nowrap">Peran Semantik</th>
        <th class="py-3 px-4 font-bold text-sm text-gray-900 w-44 whitespace-nowrap">Palet Dasar</th>
        <th class="py-3 px-4 font-bold text-sm text-gray-900">Fungsi & Penggunaan</th>
      </tr>
    </thead>
    <tbody class="text-sm text-gray-700 divide-y divide-gray-100">
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4"><div class="w-5 h-5 mx-auto rounded-full shadow-inner bg-primary-500"></div></td>
        <td class="py-3 px-4 font-semibold text-gray-900">Primary</td>
        <td class="py-3 px-4"><span class="inline-block px-2.5 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-medium border border-primary-100">Blue</span></td>
        <td class="py-3 px-4 leading-relaxed">Mewakili identitas BSrE. Digunakan untuk elemen interaktif utama, tombol <i>call-to-action</i> (CTA), <i>link</i>, dan status aktif.</td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4"><div class="w-5 h-5 mx-auto rounded-full shadow-inner bg-success-500"></div></td>
        <td class="py-3 px-4 font-semibold text-gray-900">Success</td>
        <td class="py-3 px-4"><span class="inline-block px-2.5 py-1 rounded-full bg-success-50 text-success-600 text-xs font-medium border border-success-100">Green</span></td>
        <td class="py-3 px-4 leading-relaxed">Mengomunikasikan penyelesaian tugas yang berhasil, validasi positif, atau sistem yang berjalan normal.</td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4"><div class="w-5 h-5 mx-auto rounded-full shadow-inner bg-warning-500"></div></td>
        <td class="py-3 px-4 font-semibold text-gray-900">Warning</td>
        <td class="py-3 px-4"><span class="inline-block px-2.5 py-1 rounded-full bg-warning-50 text-warning-600 text-xs font-medium border border-warning-100">Yellow</span></td>
        <td class="py-3 px-4 leading-relaxed">Memberikan peringatan yang tidak menghalangi proses (non-fatal), status <i>pending</i>, atau aksi yang membutuhkan kehati-hatian.</td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4"><div class="w-5 h-5 mx-auto rounded-full shadow-inner bg-danger-500"></div></td>
        <td class="py-3 px-4 font-semibold text-gray-900">Danger</td>
        <td class="py-3 px-4"><span class="inline-block px-2.5 py-1 rounded-full bg-danger-50 text-danger-600 text-xs font-medium border border-danger-100">Red</span></td>
        <td class="py-3 px-4 leading-relaxed">Mengindikasikan <i>error</i>, kegagalan sistem, atau tindakan destruktif yang tidak bisa dikembalikan (seperti menghapus data permanen).</td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4"><div class="w-5 h-5 mx-auto rounded-full shadow-inner bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div></td>
        <td class="py-3 px-4 font-semibold text-gray-900">Discovery</td>
        <td class="py-3 px-4"><span class="inline-block px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium border border-purple-100">Indigo / Purple / Pink</span></td>
        <td class="py-3 px-4 leading-relaxed">Digunakan untuk menyoroti fitur baru, status spesial, label kategori, promosi, atau informasi sekunder agar tidak bertabrakan dengan warna Primary.</td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4"><div class="w-5 h-5 mx-auto rounded-full shadow-inner bg-gray-500"></div></td>
        <td class="py-3 px-4 font-semibold text-gray-900">Neutral</td>
        <td class="py-3 px-4"><span class="inline-block px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">Gray / Base</span></td>
        <td class="py-3 px-4 leading-relaxed">Digunakan secara luas untuk tipografi (teks), latar belakang, garis batas (<i>border</i>), dan elemen antarmuka yang dinonaktifkan (<i>disabled</i>).</td>
      </tr>
    </tbody>
  </table></div>

## Text Color

Saat pengguna berinteraksi dengan aplikasi, mereka jarang membaca teks kata demi kata; mereka memindai (_scanning_) layar untuk mencari informasi yang paling relevan. Jika semua teks (judul utama, paragraf isi, catatan kaki) ditampilkan dengan tingkat kepekatan warna yang seragam, antarmuka akan terasa datar, sesak, dan memicu kelelahan visual (_cognitive overload_).

Untuk mengatasi hal tersebut, **BSrE Design System** menerapkan hierarki tipografi dengan membedakan warna teks ke dalam beberapa tingkatan (seperti _primary_, _secondary_, hingga _disabled_). Secara tidak sadar mata pengguna diarahkan ke informasi krusial yang harus dibaca pertama kali, sekaligus mendorong informasi pelengkap perlahan ke latar belakang visual.

<div class="overflow-x-auto mt-6 mb-12"><table class="w-full text-left border-collapse bg-white !m-0" style="margin: 0 !important;">
    <thead class="bg-gray-50/50">
      <tr class="border-b border-gray-200">
        <th class="py-3 px-4 font-bold text-sm text-gray-900 w-32 whitespace-nowrap">Token / Class</th>
        <th class="py-3 px-4 font-bold text-sm text-gray-900 w-44 whitespace-nowrap">Nilai (Click to Copy)</th>
        <th class="py-3 px-4 font-bold text-sm text-gray-900">Fungsi & Penggunaan</th>
        <th class="py-3 px-4 font-bold text-sm text-gray-900 w-24 text-center">Preview</th>
      </tr>
    </thead>
    <tbody class="text-sm text-gray-700 divide-y divide-gray-100">
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4 font-semibold text-gray-900">text-main</td>
        <td class="py-3 px-4"><code onclick="navigator.clipboard.writeText('#0F172AE6'); let o = this.innerText; this.innerText = 'Copied!'; this.classList.add('text-main-500', 'border-primary-500', 'bg-primary-50'); setTimeout(() => { this.innerText = o; this.classList.remove('text-main-500', 'border-primary-500', 'bg-primary-50'); }, 1500);" class="cursor-pointer hover:bg-gray-100 transition-colors px-2 py-1.5 rounded bg-gray-50 border border-gray-200 text-[11px] font-mono text-gray-600 select-none whitespace-nowrap block w-fit" title="Click to copy">#0F172AE6 (90%)</code></td>
        <td class="py-3 px-4 leading-relaxed">Untuk teks yang paling penting. Digunakan pada judul (<i>heading</i>), <i>sub-heading</i>, dan teks paragraf utama.</td>
        <td class="py-3 px-4"><div class="w-10 h-10 mx-auto rounded-lg bg-[#0F172AE6]"></div></td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4 font-semibold text-gray-900">text-secondary</td>
        <td class="py-3 px-4"><code onclick="navigator.clipboard.writeText('#0F172AB3'); let o = this.innerText; this.innerText = 'Copied!'; this.classList.add('text-primary-500', 'border-primary-500', 'bg-primary-50'); setTimeout(() => { this.innerText = o; this.classList.remove('text-primary-500', 'border-primary-500', 'bg-primary-50'); }, 1500);" class="cursor-pointer hover:bg-gray-100 transition-colors px-2 py-1.5 rounded bg-gray-50 border border-gray-200 text-[11px] font-mono text-gray-600 select-none whitespace-nowrap block w-fit" title="Click to copy">#0F172AB3 (70%)</code></td>
        <td class="py-3 px-4 leading-relaxed">Untuk informasi pendukung. Digunakan pada deskripsi singkat, metadata (tanggal/waktu), <i>breadcrumb</i>, atau teks di dalam tabel.</td>
        <td class="py-3 px-4"><div class="w-10 h-10 mx-auto rounded-lg bg-[#0F172AB3]"></div></td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4 font-semibold text-gray-900">text-muted</td>
        <td class="py-3 px-4"><code onclick="navigator.clipboard.writeText('#0F172A80'); let o = this.innerText; this.innerText = 'Copied!'; this.classList.add('text-primary-500', 'border-primary-500', 'bg-primary-50'); setTimeout(() => { this.innerText = o; this.classList.remove('text-primary-500', 'border-primary-500', 'bg-primary-50'); }, 1500);" class="cursor-pointer hover:bg-gray-100 transition-colors px-2 py-1.5 rounded bg-gray-50 border border-gray-200 text-[11px] font-mono text-gray-600 select-none whitespace-nowrap block w-fit" title="Click to copy">#0F172A80 (50%)</code></td>
        <td class="py-3 px-4 leading-relaxed">Untuk teks yang intensitasnya diturunkan agar tidak mendominasi. Digunakan pada <i>caption</i> gambar, catatan kecil, atau <i>helper text</i> input.</td>
        <td class="py-3 px-4"><div class="w-10 h-10 mx-auto rounded-lg bg-[#0F172A80]"></div></td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4 font-semibold text-gray-900">text-placeholder</td>
        <td class="py-3 px-4"><code onclick="navigator.clipboard.writeText('#0F172A59'); let o = this.innerText; this.innerText = 'Copied!'; this.classList.add('text-primary-500', 'border-primary-500', 'bg-primary-50'); setTimeout(() => { this.innerText = o; this.classList.remove('text-primary-500', 'border-primary-500', 'bg-primary-50'); }, 1500);" class="cursor-pointer hover:bg-gray-100 transition-colors px-2 py-1.5 rounded bg-gray-50 border border-gray-200 text-[11px] font-mono text-gray-600 select-none whitespace-nowrap block w-fit" title="Click to copy">#0F172A59 (35%)</code></td>
        <td class="py-3 px-4 leading-relaxed">Untuk teks sementara. Digunakan khusus di dalam kolom <i>input</i> form (sebagai bayangan sebelum pengguna mengetik).</td>
        <td class="py-3 px-4"><div class="w-10 h-10 mx-auto rounded-lg bg-[#0F172A59]"></div></td>
      </tr>
      <tr class="hover:bg-gray-50/30 transition-colors">
        <td class="py-3 px-4 font-semibold text-gray-900">text-disabled</td>
        <td class="py-3 px-4"><code onclick="navigator.clipboard.writeText('#0F172A33'); let o = this.innerText; this.innerText = 'Copied!'; this.classList.add('text-primary-500', 'border-primary-500', 'bg-primary-50'); setTimeout(() => { this.innerText = o; this.classList.remove('text-primary-500', 'border-primary-500', 'bg-primary-50'); }, 1500);" class="cursor-pointer hover:bg-gray-100 transition-colors px-2 py-1.5 rounded bg-gray-50 border border-gray-200 text-[11px] font-mono text-gray-600 select-none whitespace-nowrap block w-fit" title="Click to copy">#0F172A33 (20%)</code></td>
        <td class="py-3 px-4 leading-relaxed">Untuk teks pada elemen yang sedang dimatikan (<i>inactive</i>). Digunakan pada tombol yang belum bisa diklik atau <i>input</i> yang di-<i>lock</i>.</td>
        <td class="py-3 px-4"><div class="w-10 h-10 mx-auto rounded-lg bg-[#0F172A33]"></div></td>
      </tr>
    </tbody>
  </table></div>

## Cara Penggunaan

Karena sistem warna **BSrE Design System** terintegrasi penuh dengan ekosistem Tailwind CSS di dalam pustaka komponen, kita tidak perlu lagi menulis kode HEX secara manual. Kita bisa langsung memanggil nama token warna menggunakan _prefix_ (awalan) utilitas standar Tailwind.

Berikut adalah formula dasar penggunaannya:

<div class="overflow-x-auto mt-4 mb-8"><table class="w-full text-left border-collapse bg-white !m-0" style="margin: 0 !important;">
  <thead class="bg-gray-50/50">
    <tr class="border-b border-gray-200">
      <th class="py-3 px-4 font-bold text-sm text-gray-900 w-48">Properti CSS</th>
      <th class="py-3 px-4 font-bold text-sm text-gray-900 w-32">Prefix Tailwind</th>
      <th class="py-3 px-4 font-bold text-sm text-gray-900">Contoh Implementasi</th>
    </tr>
  </thead>
  <tbody class="text-sm text-gray-700 divide-y divide-gray-100">
    <tr class="hover:bg-gray-50/30 transition-colors">
      <td class="py-3 px-4 font-medium text-gray-900">Latar Belakang (Background)</td>
      <td class="py-3 px-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded font-mono">bg-</code></td>
      <td class="py-3 px-4"><code class="text-xs text-gray-600 font-mono">bg-primary-500</code>, <code class="text-xs text-gray-600 font-mono">bg-gray-50</code></td>
    </tr>
    <tr class="hover:bg-gray-50/30 transition-colors">
      <td class="py-3 px-4 font-medium text-gray-900">Warna Huruf (Text Color)</td>
      <td class="py-3 px-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded font-mono">text-</code></td>
      <td class="py-3 px-4"><code class="text-xs text-gray-600 font-mono">text-danger-600</code>, <code class="text-xs text-gray-600 font-mono">text-success-700</code></td>
    </tr>
    <tr class="hover:bg-gray-50/30 transition-colors">
      <td class="py-3 px-4 font-medium text-gray-900">Garis Tepi (Border)</td>
      <td class="py-3 px-4"><code class="text-xs bg-gray-100 text-pink-600 px-2 py-1 rounded font-mono">border-</code></td>
      <td class="py-3 px-4"><code class="text-xs text-gray-600 font-mono">border-warning-300</code>, <code class="text-xs text-gray-600 font-mono">border-gray-200</code></td>
    </tr>
  </tbody>
</table></div>

**Contoh Implementasi dan Hasilnya:**

<div class="p-6 border border-gray-200 rounded-xl bg-gray-50/50 flex flex-col gap-5">
  <button class="bg-primary-500 hover:bg-primary-600 text-white border border-primary-700 px-4 py-2 rounded-base font-medium transition-colors w-fit shadow-sm">
    Kirim Dokumen
  </button>
  <div class="bg-danger-50 border border-danger-200 text-danger-700 p-4 rounded-base text-sm shadow-sm">
    <strong class="font-bold">Gagal!</strong> Sertifikat elektronik tidak ditemukan.
  </div>
</div>

```html
<button
  class="bg-primary-500 hover:bg-primary-600 text-white border border-primary-700 px-4 py-2 rounded-base font-medium transition-colors w-fit shadow-sm"
>
  Kirim Dokumen
</button>

<div
  class="bg-danger-50 border border-danger-200 text-danger-700 p-4 rounded-base text-sm shadow-sm"
>
  <strong class="font-bold">Gagal!</strong> Sertifikat elektronik tidak
  ditemukan.
</div>
```
