const faPoemsMarkdown = require("fapoems-markdown");

module.exports = {
  lang: "fa-IR",
  title: " کمی شعر کهن بخوانیم",
  description: "شعرهای کهن فارسی را راحت تر بخوانیم و به اشتراک بگذاریم .",
  base: "/faPoems/",
  extendsMarkdown: (md) => {
    md.use(faPoemsMarkdown);
  },
  themeConfig: {
    repo: "https://github.com/mehotkhan/faPoems",
    editLinks: true,
    editLinkText: "ویرایش",
    lastUpdated: "آخرین ویرایش",
    navbar: [
      // NavbarItem
      {
        text: "درباره اینجا",
        link: "/about-here/",
      },
      // NavbarGroup
    ],
    // logo: 'https://vuejs.org/images/logo.png',
  },
};
