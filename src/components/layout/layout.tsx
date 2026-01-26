import Navigation from "@/components/ui/navigation";
import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "../ThemeProvider.tsx";
import { ThemeToggleButton } from "../ThemeToggleButton";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  lang?: 'en' | 'fr'; // Added language prop
}

const Layout = ({
  children,
  title,
  description,
  keywords,
  lang = 'en' // Default to English
}: LayoutProps) => {

  // Define default meta content for both languages
  const metaContent = {
    en: {
     title: "Projects - Ruphin Koding | Software Engineering Student & Frontend Developer",
    description:
      "Explore a curated collection of Ruphin Koding's projects, including web applications, mobile apps, backend systems, and UI/UX implementations. Featuring work built with React, vite, Flutter, and modern development tools.",
    keywords:
      "Ruphin Koding projects, web development, mobile apps, Frontend and backend development, vite, React, Flutter, software engineering portfolio, DevSecOps projects, Africa Tech"
  },

  fr: {
    title: "Projets - Ruphin Koding | Étudiant en Génie Logiciel & Développeur Frontend",
    description:
      "Découvrez une sélection des projets de Ruphin Koding : applications web, apps mobiles Flutter, systèmes backend, interfaces modernes et solutions logicielles. Réalisés avec React, vite, Flutter, et d'autres technologies modernes.",
    keywords:
      "Projets Ruphin Koding, développement web, applications mobiles, développement Frontend et backend, vite, React, Flutter, portfolio ingénieur logiciel, Tech Afrique"
    }
  };

  const currentMeta = metaContent[lang];

  useEffect(() => {
    // Update document title
    document.title = title || currentMeta.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || currentMeta.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || currentMeta.keywords);
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || currentMeta.title);
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || currentMeta.description);
    }

    // Set HTML lang attribute for better SEO and accessibility
    document.documentElement.lang = lang;

  }, [title, description, keywords, lang, currentMeta]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        {/* Le bouton de thème est placé ici, en position fixe */}
        <div className="fixed bottom-5 right-5 z-50">
          <ThemeToggleButton />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
