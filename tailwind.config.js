/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Panggil Preset dari Library (Supaya warna konsisten)
  presets: [require('../bsre-ui-kit-vue/tailwind.preset.js')],

  content: [
    // 2. Scan file dokumentasi
    './docs/**/*.{md,vue,js}',

    // 3. SCAN FOLDER SOURCE LIBRARY (PENTING!)
    // Path ini menembak langsung ke folder codingan library di sebelah
    '../bsre-ui-kit-vue/src/**/*.{vue,js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
