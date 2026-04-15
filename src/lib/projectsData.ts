import { FaJava, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCss3, SiDart, SiDjango, SiFirebase, SiFlutter, SiHtml5, SiJavascript, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSpring, SiTailwindcss, SiThymeleaf, SiTypescript } from "react-icons/si";
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
    repoGit: "https://github.com/ruphin314-eng/les-joyaux-du-temps",
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
    repoGit: "https://github.com/ruphin314-eng/PyNote",
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
    repoGit: "https://github.com/ruphin314-eng/PyPlayer",
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
    repoGit: "https://github.com/ruphin314-eng/pyExploreur",
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
      { name: "Django REST Framework", icon: SiDjango },
      
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
        { name: "Flutter", icon: SiFlutter }, // si tu veux remplacer l'icône, tu peux utiliser une icône Flutter spécifique
        { name: "Dart", icon: SiDart }, // icône générique pour Dart si disponible
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
        { name: "Flutter", icon: SiFlutter },
        { name: "Dart", icon: SiDart },
        { name: "Firebase", icon: SiFirebase },
    ],
    repoGit: "#",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}whatface.png`,
},
{
    id: "wifi_Qrcode",
    title: "wifi_Qrcode - Application Python",
    description: "application Python pour générer des QR codes de connexion WiFi déja connecter a la machine facilement partageables.",
    category: "mobile",
    tech: [
        { name: "Python", icon: SiPython },
        { name: "Pygame", icon: SiPython },
        { name: "subprocess", icon: SiPython },
        { name: "qrcode", icon: SiPython },
        { name: "pyperclip", icon: SiPython },
    ],
    repoGit: "https://github.com/ruphin314-eng/wifi_qrcode/blob/main/wifi_QRCode.py",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}wifi_Qrcode.png`,
},
{
    id: "revenu_pash",
    title: "revenu_pash - Application web front react nextjs et backend django",
    description: "Application web de gestion de revenu personnel avec frontend en React + Nextjs et backend en Django et django rest framwork pour lier le front et le backend.",
    category: "web",
    tech: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Django", icon: SiDjango },
        { name: "Django REST Framework", icon: SiDjango },
    ],
    repoGit: "https://github.com/ruphin314-eng/revenu-pash",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}revenu_pash.png`,
},

{
    id: "Sentiment-java",
    title: "Sentiment-java - Application Java",
    description: "Backend en Java spring boot pour l'analyse de sentiment positif et negatif dans les textes.",
    category: "backend",
    tech: [
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpring },
        { name: "PostgreSQL", icon: SiPostgresql },

    ],
    repoGit: "https://github.com/ruphin314-eng/Sentiment-java",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}sentiment_java.png`,
},

{
    id: "avis-page",
    title: "Avis-Page - Application React nextJs",
    description: "Frontend en React next Js lier a mon backend java Spring Boot Sentiment-java pour l'analyse de sentiment positif et negatif dans les textes.",
    category: "web",
    tech: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        {name: "TypeScript", icon: SiTypescript },
        {name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },


    ],
    repoGit: "https://github.com/ruphin314-eng/avis-pages",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}avis_page_java.png`,
},

{
    id: "Gestion-Stock",
    title: "Gestion-Stock - Application Java",
    description: "Backend en Java spring boot pour la gestion des stocks et Thymeleaf pour la visualisation du dashboard-Admin.",
    category: "backend",
    tech: [
        { name: "Java", icon: FaJava },
        { name: "Spring Boot", icon: SiSpring },
        { name: "Thymeleaf", icon: SiThymeleaf },

    ],
    repoGit: "https://github.com/ruphin314-eng/gestion_de_stock",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}gestion_stock.png`,
},

{
    id: "Shop-Ecommerce",
    title: "Shop-Ecommerce - Application React nextJs",
    description: "Frontend en React next Js lier a mon backend java Spring Boot Gestion-Stock pour pouvoir gérer les commandes, les Quantités, les produits et les Categories.",
    category: "web",
    tech: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        {name: "TypeScript", icon: SiTypescript },
        {name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },


    ],
    repoGit: "https://github.com/ruphin314-eng/Shop-Ecommerce",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}shop_ecommerce.png`,
},

{
    id: "Safyrr-Presentation",
    title: "Safyrr-Presentation - Application React nextJs",
    description: "Frontend en React next Js pour la presentation d'une nouvelle application de transaction d'argent.",
    category: "web",
    tech: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        {name: "TypeScript", icon: SiTypescript },
        {name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },


    ],
    repoGit: "https://github.com/ruphin314-eng/SafyrrPresentation-",
    liveUrl: "https://safyrr-presentation.netlify.app/",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}safyrr_presentation.png`,
},

{
    id: "AGroScan",
    title: "AGroScan - Application Flutter",
    description: "Application Flutter pour l'analyses des image des plantes afin de détecter les maladies associées.",
    category: "mobile",
    tech: [
        { name: "Flutter", icon: SiFlutter },
        { name: "Dart", icon: SiDart },
        { name: "Firebase", icon: SiFirebase },
    ],
    repoGit: "https://github.com/ruphin314-eng/agriscan",
    liveUrl: "#",
    imageUrl: `${PROJECT_IMAGE_BASE_PATH}agroscan.png`,
},

];