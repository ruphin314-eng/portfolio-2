import React from "react";
import { TargetAndTransition, Transition, motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { FaGitAlt, FaJava, FaReact, FaWhatsapp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiGithub, SiJavascript, SiNestjs, SiNextdotjs, SiSpringboot, SiTypescript } from "react-icons/si";
import { SiFlutter, SiSqlite } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";

// --- Data Configuration --- //
interface SocialLink {
    name: string;
    url: string;
    icon: React.ElementType;
}

interface ActionButton {
    text: string;
    url: string;
    variant: 'default' | 'outline';
    icon?: React.ElementType;
    downloadName?: string;
}

const socialLinks: SocialLink[] = [
    { name: "GitHub", url: "https://github.com/ruphin314-eng", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ruphin-ruphin-bb157a359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: Linkedin },
    { name: "WhatsApp", url: "https://wa.me/+237688845535", icon: FaWhatsapp },
    { name: "Email", url: "mailto:ruphinruphin314@gmail.com", icon: Mail },
];

const actionButtons: ActionButton[] = [
    { text: "Let's Talk", url: "https://wa.me/+237651217500", variant: 'default', icon: ArrowRight },
    { text: "Download CV", url: "/cv/Cv-ruphin.pdf", variant: 'outline', icon: Download, downloadName: "Ruphin-Koding-CV.pdf" },
];

// --- Dynamic Decorative Icons Data --- //
interface DynamicIcon {
    icon: React.ElementType;
    size: number;
    color: string;
    position: { top?: string; bottom?: string; left?: string; right?: string; };
    animate: TargetAndTransition; 
    transition: Transition; 
    whileHover?: TargetAndTransition; // Add whileHover to the interface
}

const dynamicIcons: DynamicIcon[] = [
    { 
        icon: FaReact, size: 60, color: "#61DAFB", position: { top: "15%", left: "15%" },
        animate: { y: [0, -25, 0], rotate: [0, 15, -15, 0] }, 
        transition: { duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 },
        whileHover: { scale: 1.3, rotate: 360, transition: { duration: 0.3, ease: "easeOut" } }
    },

    {
    icon: FaPython,
    size: 60,
    color: "#3776AB",
    position: { top: "25%", left: "20%" },

    animate: {
        x: [0, -20, 0], rotate: [0, 15, -15, 0]
    },

    transition: {
        duration: 2.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 0.3
    },

    whileHover: {
        scale: 1.3,
        rotate: 360,
        transition: { duration: 0.3, ease: "easeOut" }
    }
},
{
    icon: SiDjango,
    size: 60,
    color: "#092E20",
    position: { top: "40%", left: "10%" },

    animate: {
        y: [0, -18, 0],
        rotate: [0, 8, -8, 0]
    },

    transition: {
        duration: 2.6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 0.4
    },

    whileHover: {
        scale: 1.3,
        rotate: 360,
        transition: { duration: 0.3, ease: "easeOut" }
    }
},
{
    icon: SiSqlite,
    size: 60,
    color: "#003B57",
    position: { top: "55%", left: "20%" },

    animate: {
        y: [0, -18, 0],
        rotate: [0, 10, -10, 0]
    },

    transition: {
        duration: 2.7,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 0.5
    },

    whileHover: {
        scale: 1.3,
        rotate: 360,
        transition: { duration: 0.3, ease: "easeOut" }
    }
},
{icon: SiFlutter,
    size: 60,
    color: "#02569B",
    position: { top: "70%", left: "15%" },

    animate: {
        y: [0, -20, 0], rotate: [0, 12, -12, 0]
    },

    transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 0.6
    },

    whileHover: {
        scale: 1.3,
        rotate: 360,
        transition: { duration: 0.3, ease: "easeOut" }
    }
},

    { 
        icon: SiNestjs, size: 35, color: "#ED8B00", position: { bottom: "20%", right: "18%" },
        animate: { y: [0, 20, 0], rotate: [0, -10, 10, 0] }, 
        transition: { duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 },
        whileHover: { scale: 1.3, rotate: 360, transition: { duration: 0.3, ease: "easeOut" } }
    },
    { 
        icon: SiJavascript, size: 45, color: "#6DB33F", position: { top: "25%", right: "25%" },
        animate: { x: [0, 20, 0], rotate: [0, 20, -20, 0] }, 
        transition: { duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.5 },
        whileHover: { scale: 1.3, rotate: 360, transition: { duration: 0.3, ease: "easeOut" } }
    },
    {
        icon: SiGithub, size: 46, color: "#F7DF1E", position: { bottom: "35%", right: "10%" },
        animate: { y: [0, 25, 0], rotate: [0, -15, 15, 0] },
        transition: { duration: 2.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 3 },
        whileHover: { scale: 1.3, rotate: 360, transition: { duration: 0.3, ease: "easeOut" } }
    },
    { 
        icon: SiNextdotjs, size: 32, color: "#FFFFFF", position: { top: "65%", right: "20%" }, 
        animate: { x: [0, 20, 0], rotate: [0, -10, 10, 0] }, 
        transition: { duration: 2.9, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 3.5 },
        whileHover: { scale: 1.3, rotate: 360, transition: { duration: 0.3, ease: "easeOut" } }
    },
];

// --- Animation Variants for main content --- //
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

// --- Main Component --- //
const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
            {/* Modern Decorative Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-1/3 h-2/3 bg-primary/5 blur-3xl rounded-full animate-pulse-glow"></div>
                <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-primary-glow/5 blur-3xl rounded-full animate-float"></div>

                {/* Dynamic Decorative Icons */}
                {dynamicIcons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <motion.div
                            key={index}
                            className="absolute z-0 opacity-50"
                            style={item.position}
                            animate={item.animate}
                            transition={item.transition}
                            whileHover={item.whileHover}
                        >
                            <IconComponent size={item.size} style={{ color: item.color }} />
                        </motion.div>
                    );
                })}
            </div>

            <div className="container mx-auto px-4 z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.p variants={itemVariants} className="text-lg font-medium text-primary mb-2 title1">
                        Bonjour, je suis Ruphin Koding
                    </motion.p>

                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tighter mb-6 title3">
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                1000, // wait 1.5s
                                'Software Engineer Student',
                                1000,
                                'Backend Developer',
                                1500,
                                'Maintenancier logiciel',
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                            deletionSpeed={70}
                        />
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 title2">
                        Skilled in building and maintaining scalable applications using React, Django, Python, and Flutter, with a solid background in software support and maintenance.
                    </motion.p>

                    {/* Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                        {actionButtons.map((btn) => (
                            <Button key={btn.text} asChild size="lg" variant={btn.variant} className={`group ${btn.variant === 'default' ? 'bg-gradient-primary border-0 shadow-primary hover:shadow-glow' : 'border-border-light hover:border-primary hover:bg-primary/10'}`}>
                                <a 
                                    href={btn.url} 
                                    {...(btn.downloadName && { download: btn.downloadName })}
                                    target={btn.downloadName ? undefined : "_blank"} 
                                    rel="noopener noreferrer"
                                >
                                    {btn.text}
                                    {btn.icon && <btn.icon className={`ml-2 w-5 h-5 transition-transform ${btn.variant === 'default' ? 'group-hover:translate-x-1' : 'group-hover:scale-110'}`} />}
                                </a>
                            </Button>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="flex justify-center items-center gap-6">
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-text-muted hover:text-primary transition-colors">
                                <link.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
