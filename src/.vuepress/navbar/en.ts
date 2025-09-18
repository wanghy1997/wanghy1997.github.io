import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([

  "/HOME/",
    { text: "Archiver",
    link: "archiver/README.md",
    icon: "box-archive",
    prefix: "archiver/",
    children: [
        {
        text: "Interesting",
        prefix: "Interesting/",
        children: [
          { text: "研究兴趣", icon: "expand", link: "I_1.md" },
        ],
      },
      {
        text: "DataSets",
        prefix: "Datasets/",
        children: [
          { text: "DataSets", icon: "expand", link: "README.md" },
        ],
      },
      {
        text: "MIA",
        prefix: "MIA/",
        children: [
          // { text: "Medical Image Analysis", icon: "expand", link: "README.md" },
          { text: "Medical Image Segmentation", icon: "expand", link: "Medical image segmentation.md" },
        ],
      },
      {
        text: "Active Learning",
        prefix: "ActiveLearning/",
        children: [
          { text: "Active Learning", icon: "expand", link: "README.md" },
        ],
      },
      {
        text: "Intelligence",
        prefix: "Intelligence/",
        children: [
          { text: "Autonomous Driving", icon: "expand", link: "ad.md" },
          { text: "Object Detection", icon: "expand", link: "object_detection.md" },
          { text: "Open World", icon: "expand", link: "OpenWorld.md" },
          { text: "Robotic Arms", icon: "expand", link: "robot.md" },
        ],
      },

    ]
},
    {
    text: "Browser",
    icon: "lightbulb",
    prefix: "browser/",
    children: [
      {
        text: "learning",
        prefix: "learning/",
        children: [
          { text: "How2read", icon: "expand", link: "README.md" },
          { text: "How2write", icon: "expand", link: "论文写作-冷佳旭.md" },
          { text: "Whyfaster", icon: "expand", link: "README.md" },
        ],
      },
    ],
  },
    {
    text: "Coooder",
    icon: "code",
    prefix: "coooder/",
    children: [
      {
        text: "Ubuntu",
        icon: "pen-to-square",
        prefix: "ubuntu/",
        children: [
          { text: "ubuntu", icon: "computer", link: "README.md" },
          { text: "docker", icon: "shapes", link: "process/docker.md" },
        ],
      },
      {
        text: "MacOS",
        icon: "pen-to-square",
        prefix: "mac/",
        children: [
          { text: "Almost", icon: "rainbow", link: "README.md" },
        ],
      },
    ],
  },
    {
    text: "Discover",
    icon: "fire",
    prefix: "discover/uncover",
    children: [
      { text: "overview", icon: "eye", link: "README.md" },
      {
        text: "Big Model",
        icon: "eye",
        prefix: "",
        children: [
          { text: "ICL/CoT/GoT", icon: "code-branch", link: "CoT.md" },
          { text: "EI", icon: "cable-car", link: "ei.md" },
          { text: "Large model", icon: "cable-car", link: "large_model.md" },
        ],
      },
    ],
  },
  // "/others/",
    {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "LLM",
        icon: "pen-to-square",
        prefix: "posts/LLM",
        children: [
          { text: "llm1", icon: "pen-to-square", link: "1.md" },
          { text: "llm2", icon: "pen-to-square", link: "2.md" },
          { text: "llm2", icon: "pen-to-square", link: "3.md" },
          { text: "llm2", icon: "pen-to-square", link: "4.md" },
        ],
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry.md" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit.md" },
      "tomato",
      "strawberry",
    ],
  },
]);
