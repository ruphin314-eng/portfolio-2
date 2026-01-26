import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCss3, SiDjango, SiHtml5, SiJavascript, SiNodedotjs, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Project } from "./projet";

// Define the base path for project images
const PROJECT_IMAGE_BASE_PATH = "/projects img/";

export const projectsData: Project[] = [
     {
    id: "proj-joyaux-temps",
    title: "Les Joyaux du Temps - E-commerce",
    description: "E-commerce fullstack pour la vente de bijoux. Frontend en React + Vite, Backend avec serveur Node.js et chatbot intégré.",
    category: "web",
    tech: [
      { name: "React", icon: FaReact },
      { name: "Vite", icon: RiNextjsFill },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    repoGit: "#",
    liveUrl: "https://les-joyaux-du-temps.netlify.app/",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}joyaux-du-temps.png`,
  },
  {
    id: "proj-music-steam",
    title: "Music Steam - Streaming Musical",
    description: "Site pour écouter et diffuser sa musique, développé en HTML, CSS et JavaScript.",
    category: "web",
    tech: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}music-steam.png`,
  },
  {
    id: "proj-car-race",
    title: "Course de Voiture - Mini jeu",
    description: "Mini jeu de course développé en Python avec la bibliothèque Pygame.",
    category: "mobile",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "Pygame", icon: SiPython },
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}car-race.png`,
  },
  {
    id: "proj-pynotes",
    title: "PyNotes - Application de blog & notes",
    description: "Application de prise de notes et blog en Python avec PySide6 et intégration d'une mini API.",
    category: "mobile",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "PySide2", icon: SiPython },
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}pynotes.png`,
  },
  {
    id: "proj-pyplayer",
    title: "PyPlayer MP4 - Lecteur vidéo",
    description: "Application de lecteur vidéo MP4 en Python utilisant PySide2.",
    category: "mobile",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "PySide2", icon: SiPython },
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}pyplayer.png`,
  }, 
  {
    id: "proj-pyexplorerur",
    title: "PyExplorerur  - Explorateur de fichiers",
    description: "Application d'explorateur de fichier dans le style windows en Python utilisant PySide2.",
    category: "mobile",
    tech: [
      { name: "Python", icon: SiPython },
      { name: "PySide2", icon: SiPython },
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}pyexplorerur.png`,
  },
  {
    id: "proj-rushop",
    title: "RuShop - E-commerce vêtements",
    description: "Site e-commerce pour la vente de vêtements, développé avec Django et Django REST Framework.",
    category: "backend",
    tech: [
      { name: "Django", icon: SiDjango },
      { name: "Python", icon: SiPython },
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}rushop.png`,
  },
  {
    id: "proj-gamstore",
    title: "GamStore - Application Flutter",
    description: "Application Flutter pour découvrir, acheter et gérer des jeux vidéo. Interface moderne et responsive.",
    category: "mobile",
    tech: [
        { name: "Flutter", icon: FaReact }, // si tu veux remplacer l'icône, tu peux utiliser une icône Flutter spécifique
        { name: "Dart", icon: SiTypescript }, // icône générique pour Dart si disponible
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}gamstore.png`,
},
{
    id: "proj-whatface",
    title: "WhatFace - Application Flutter",
    description: "Application Flutter de messagerie et réseau social, avec intégration temps réel et notifications.",
    category: "mobile",
    tech: [
        { name: "Flutter", icon: FaReact },
        { name: "Dart", icon: SiTypescript },
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}whatface.png`,
},

];