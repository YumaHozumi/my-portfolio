import ProductShowcase from './ProductShowcase.vue';

export default {
  title: 'ProductShowcase',
  component: ProductShowcase,
};

export const ImageLeft = {
  args: {
    title: 'Shelfmate',
    description: '所持している本を管理できるWebアプリ。【使用技術】(フロントエンド)Vue.js、(バックエンド)Golang、 (その他)Firebase、Google Books API、国立国会図書館API',
    githubLink: 'https://github.com/YumaHozumi/Shelfmate',
    appLink: 'https://shelfmate.hzmintech.com/',
    imageSrc: '../assets/images/bookshelf-view.png',
    imageRight: false,
  },
};

export const ImageRight = {
  args: {
    title: 'PdfMerge App',
    description: 'pdf結合ができるWebアプリ。jpegやpngをそのまま投入しても一括でpdfとして結合してくれるところがポイント。【使用技術】(フロントエンド)Vue.js、 Vuetify、(バックエンド)Python、FastAPI',
    githubLink: 'https://github.com/YumaHozumi/pdfMergeApp',
    appLink: 'https://shelfmate.hzmintech.com/',
    imageSrc: '../assets/images/sample-merge.png',
    imageRight: true,
  },
};
