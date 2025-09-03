import type { Project } from "../types/types";

export const projectList: Project[] = [
  {
    id: 0,
    img: "/assets/whispernews_mobile.webp",
    imgDesktop: "/assets/whispernews_desktop.webp",
    title: "Whisper News",
    desc: "An example homepage for a news site. Includes a mobile version. I expanded the example project, adding an extra section and a footer, to make it look more filled and functional.",
    repo: "https://github.com/LukCen/WhisperNews",
    url: "https://whispernews-six.vercel.app/"
  },
  {
    id: 1,
    img: "/assets/spacetravel_mobile.webp",
    imgDesktop: "/assets/spacetravel_desktop.webp",
    title: "Space Travel",
    desc: "An example page for a fictional space travel company. Includes several view, paginations and routing. Includes mobile and tablet-specific views.",
    repo: "https://github.com/LukCen/LBJSpaceTravel",
    url: "https://spacetravel.vercel.app"
  },
  {
    id: 2,
    img: "/assets/imgez_mobile.webp",
    imgDesktop: "/assets/imgez_desktop.webp",
    title: "ImgEZ",
    desc: "An image uploader built with Nuxt, using Vercel's blob storage. Allows user to upload their photo and then generates a download link that can be shared.",
    repo: "https://github.com/LukCen/ImgEz",
    url: "https://imgez.vercel.app/"
  }
]
