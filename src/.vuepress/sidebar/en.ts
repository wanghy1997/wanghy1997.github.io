import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "/",
    {
      text: "ARCHIVER",
      icon: "laptop-code",
      prefix: "archiver/",
      link: "archiver/",
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
