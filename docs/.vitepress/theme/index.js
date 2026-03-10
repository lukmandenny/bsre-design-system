import DefaultTheme from 'vitepress/theme';
import BSrEUiKit from 'bsre-ui-kit';
import './style.css';

// 1. Import komponen wrappernya
import PreviewWrapper from './components/PreviewWrapper.vue';

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    // 2. Daftarkan library komponen utama
    app.use(BSrEUiKit);

    // 3. Daftarkan wrapper sebagai komponen global
    // Biar bisa dipanggil langsung di file .md manapun
    app.component('PreviewWrapper', PreviewWrapper);
  },
};
