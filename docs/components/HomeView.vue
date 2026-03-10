<script setup>
import HomePortal from './HomePortal.vue';
</script>

<template>
  <div class="custom-home">
    <!-- Motion Graphic-->
    <!-- <section
      class="max-w-7xl mx-auto px-6 py-20 lg:py-48 flex flex-col lg:flex-row items-center relative overflow-hidden min-h-[700px] lg:min-h-[850px]"
    > -->
    <!-- Illustration -->
    <section
      class="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16"
    >
      <div class="lg:w-1/2">
        <!-- <div
          class="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6 text-xs font-bold text-bsre-blue uppercase tracking-widest"
        >
          v1.0.0
        </div> -->
        <h1
          class="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6"
        >
          Satu Standar Desain. <br />
          <span class="text-bsre-blue">Lebih Cepat, Rapi, & Konsisten.</span>
        </h1>
        <p class="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
          Jembatan antara desain dan kode. Untuk memastikan setiap aplikasi yang
          kita buat punya kualitas dan rasa yang sama.
        </p>

        <div class="flex flex-wrap gap-4">
          <BaseButton variant="primary" size="xl" href="/guide/introduction"
            >Mulai Sekarang</BaseButton
          >
          <BaseButton variant="secondary" size="xl" href="/components/button"
            >Lihat Komponen</BaseButton
          >
        </div>
      </div>

      <!-- Illustration -->
      <div class="lg:w-3/5 relative w-full flex justify-end lg:-mr-20">
        <div
          class="absolute -inset-4 rounded-3xl blur-2xl opacity-50 transition-opacity"
        ></div>
        <div class="relative">
          <img src="/pana.svg" alt="BSrE Preview" class="w-full h-auto" />
        </div>
      </div>

      <!-- Motion Graphic -->
      <!-- <div
        class="absolute -right-10 lg:-right-32 top-1/2 -translate-y-1/2 w-full lg:w-[1150px] z-0 pointer-events-none opacity-90"
        style="
          -webkit-mask-image: radial-gradient(
            circle at 60% 50%,
            black 30%,
            transparent 85%
          );
          mask-image: radial-gradient(
            circle at 60% 50%,
            black 30%,
            transparent 85%
          );
        "
      >
        <div
          class="absolute inset-0 bg-[#2FAAE1]/10 rounded-full blur-[120px]"
        ></div>

        <div class="relative w-full overflow-hidden">
          <video
            src="/rocket.mp4"
            class="w-full h-auto scale-100 transform-gpu"
            autoplay
            loop
            muted
            playsinline
          >
            Browser Anda tidak mendukung pemutaran video.
          </video>
        </div>
      </div> -->
    </section>

    <section class="bg-gray-50/50 border-t border-gray-100 py-20">
      <HomePortal />
    </section>

    <footer class="py-12 border-t border-gray-100 text-center">
      <p class="text-gray-400 text-sm">
        &copy; 2026 Balai Besar Sertifikasi Elektronik (BSrE)
        <span class="mx-2 text-gray-300">|</span> UI/UX Team
      </p>
    </footer>
  </div>
</template>

<style scoped>
/* CSS khusus untuk membersihkan layout VitePress di Home */
.custom-home {
  margin-top: calc(var(--vp-nav-height) * -1);
  padding-top: var(--vp-nav-height);
}
</style>
