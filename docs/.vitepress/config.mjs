import { defineConfig } from 'vitepress';
import path from 'path';

export default defineConfig({
  // base: '/bsre-design-system/',
  title: 'BSrE Design System',
  description:
    'Dokumentasi resmi sistem desain Balai Besar Sertifikasi Elektronik',
  lang: 'id-ID',

  // Matikan fitur Dark Mode
  appearance: false,

  themeConfig: {
    siteTitle: 'BSrE Design System',
    logo: '/logos/bsre_blue.svg',

    // 1. NAVBAR (Navigasi Atas)
    nav: [
      { text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/' },
      {
        text: 'Foundations',
        link: '/foundations/colors',
        activeMatch: '/foundations/',
      },
      {
        text: 'Components',
        link: '/components/atoms/button',
        activeMatch: '/components/',
      },
      {
        text: 'Resources',
        items: [
          {
            text: 'Figma UI Kit',
            link: 'https://www.figma.com/design/LzzI5Ba1WhuHROmNm87i6y/BSrE-Design-System?node-id=0-1&t=WNfbgLHWxK4eebNq-1',
          },
          { text: 'Logo & Aset Resmi', link: '/resources/assets' },
          { text: 'Panduan Copywriting', link: '/resources/copywriting' },
        ],
      },
    ],

    // 2. SIDEBAR (Navigasi Kiri yang Berubah-ubah)
    sidebar: {
      // Sidebar untuk Menu Guide
      '/guide/': [
        {
          text: 'Sebelum Mulai',
          items: [
            { text: 'Kenalan Dulu', link: '/guide/introduction' },
            { text: 'Gas Mulai!', link: '/guide/getting-started' },
          ],
        },
        {
          text: 'Integrasi',
          items: [
            { text: 'Vue.js', link: '/guide/vue-integration' },
            { text: 'Flutter', link: '/guide/flutter-integration' },
          ],
        },
      ],

      // Sidebar untuk Menu Foundations
      '/foundations/': [
        {
          text: 'Foundations',
          items: [
            { text: 'Colors', link: '/foundations/colors' },
            { text: 'Typography', link: '/foundations/typography' },
            { text: 'Layout Grids', link: '/foundations/layout' },
            { text: 'Corner Radius', link: '/foundations/radius' },
            // { text: 'Ikonografi', link: '/foundations/icons' },
          ],
        },
      ],

      // Sidebar untuk Menu Components (Atomic Design)
      '/components/': [
        {
          text: 'Atoms',

          items: [
            { text: 'Button', link: '/components/atoms/button' },
            { text: 'Field Input', link: '/components/atoms/input' },
            { text: 'Checkbox', link: '/components/atoms/checkbox' },
            { text: 'Radio Button', link: '/components/atoms/radio' },
            { text: 'Select', link: '/components/atoms/select' },
            { text: 'Switch', link: '/components/atoms/switch' },
            { text: 'Text Area', link: '/components/atoms/textarea' },
            { text: 'Badge', link: '/components/atoms/badge' },
            { text: 'Avatar', link: '/components/atoms/avatar' },
            { text: 'Spinner', link: '/components/atoms/spinner' },
            { text: 'Icon', link: '/components/atoms/icon' },
            { text: 'Divider', link: '/components/atoms/divider' },
            { text: 'Skeleton', link: '/components/atoms/skeleton' },
          ],
        },
        {
          text: 'Molecules',

          items: [
            { text: 'Card', link: '/components/molecules/card' },
            { text: 'Button Group', link: '/components/button-group' },
            { text: 'Search Bar', link: '/components/search' },
          ],
        },
        {
          text: 'Organisms',

          items: [
            { text: 'Navbar', link: '/components/navbar' },
            { text: 'Footer', link: '/components/footer' },
          ],
        },
      ],
    },

    // 3. PENCARIAN
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Cari dokumentasi...',
            buttonAriaLabel: 'Cari',
          },
          modal: {
            noResultsText: 'Tidak ditemukan hasil untuk',
            resetButtonTitle: 'Reset pencarian',
            footer: {
              selectText: 'untuk memilih',
              navigateText: 'untuk navigasi',
              closeText: 'untuk menutup',
            },
          },
        },
      },
    },

    // 4. LAINNYA
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/bsre-design-system' }
    // ],

    docFooter: {
      prev: 'Sebelumnya',
      next: 'Selanjutnya',
    },

    // footer: {
    //   message: 'Dirilis di bawah lisensi MIT.',
    //   copyright: '© 2026 Balai Sertifikasi Elektronik (BSrE)'
    // }
  },

  // Konfigurasi Vite Alias
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../docs'),
      },
    },
  },
});
