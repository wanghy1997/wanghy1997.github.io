import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "No.1",
    {
      text: "No.2",
      icon: "laptop-code",
      prefix: "demo/",
      link: "browser/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
