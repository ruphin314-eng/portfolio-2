import { AiOutlineMobile } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import { SiDjango, SiFlutter, SiGit, SiGithub, SiPostgresql, SiPython, SiReact } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { TbDeviceDesktop } from "react-icons/tb";

export const technologies = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    proficiency: 70,
    animate: {
      x: [-150, 50, -50, 50],
      y: [150, 50, -50, 50],
      rotate: [0, -22, 22, 0],
    },
    transition: { duration: 2.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0 },
    whileHover: { scale: 1.3, rotate: -20, zIndex: 10 },
  },
  {
    name: "Django",
    icon: SiDjango,
    color: "#092E20",
    proficiency: 40,
    animate: {
      x: [150, 50, -50, 50],
      y: [-150, 50, -50, 50],
      rotate: [0, -22, 22, 0],
    },
    transition: { duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.1 },
    whileHover: { scale: 1.3, rotate: -25, zIndex: 10 },
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    proficiency: 50,
    animate: {
      x: [0, 18, -18, 0],
      y: [0, -22, 22, 0],
      rotate: [0, 16, -16, 0],
    },
    transition: { duration: 2.15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.15 },
    whileHover: { scale: 1.3, rotate: 18, zIndex: 10 },
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    proficiency: 50,
    animate: {
      x: [50, 50, -50, 50],
      y: [150, 50, -50, 50],
      rotate: [0, -22, 22, 0],
    },
    transition: { duration: 2.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.2 },
    whileHover: { scale: 1.3, rotate: 25, zIndex: 10 },
  },
  {
    name: "Desktop Apps",
    icon: TbDeviceDesktop,
    color: "#A0AEC0",
    proficiency: 65,
    animate: {
      x: [0, 50, -50, 50],
      y: [150, 50, -50, 50],
      rotate: [0, -22, 22, 0],
    },
    transition: { duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.25 },
    whileHover: { scale: 1.3, rotate: -20, zIndex: 10 },
  },
  {
    name: "Mobile Apps",
    icon: AiOutlineMobile,
    color: "#38B2AC",
    proficiency: 40,
    animate: {
      x: [0, 50, -50, 50],
      y: [150, 50, -50, 50],
      rotate: [0, -22, 22, 0],
    },
    transition: { duration: 2.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 },
    whileHover: { scale: 1.3, rotate: 22, zIndex: 10 },
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    proficiency: 50,
    animate: {
      x: [0, -20, 20, 0],
      y: [0, 22, -22, 0],
      rotate: [0, -20, 20, 0],
    },
    transition: { duration: 2.25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.35 },
    whileHover: { scale: 1.3, rotate: -20, zIndex: 10 },
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    proficiency: 80,
    animate: {
      x: [0, 22, -22, 0],
      y: [0, 18, -18, 0],
      rotate: [0, 18, -18, 0],
    },
    transition: { duration: 2.3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.4 },
    whileHover: { scale: 1.3, rotate: 22, zIndex: 10 },
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    color: "#003B57",
    proficiency: 50,
    animate: {
      x: [50, -50, 50, -50],
      y: [100, -50, 50, -100],
      rotate: [0, 20, -20, 0],
    },
    transition: { duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 },
    whileHover: { scale: 1.3, rotate: 25, zIndex: 10 },
},
 {
    name: "Java",
    icon: FaJava,
    color: "#003B57",
    proficiency: 50,
    animate: {
      x: [50, -50, 50, -50],
      y: [100, -50, 50, -100],
      rotate: [0, 20, -20, 0],
    },
    transition: { duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 },
    whileHover: { scale: 1.3, rotate: 25, zIndex: 10 },
},
{
    name: "AI & Image Generation",
    icon: SiOpenai,
    color: "#10A37F",
    proficiency: 100,
    animate: {
      x: [-150, 50, -50, 50],
      y: [150, 50, -50, 50],
      rotate: [0, -22, 22, 0],
    },
    transition: {
      duration: 2.25,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.55,
    },
    whileHover: {
      scale: 1.3,
      rotate: 20,
      zIndex: 10,
    },
  },
];
