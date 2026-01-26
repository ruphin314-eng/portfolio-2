import AboutMe from "@/components/AboutMe.tsx";
import ContactForm from "@/components/ContactForm.tsx";
import HeroSection from "@/components/home/HeroSection.tsx";
import Layout from "@/components/layout/layout";
import MyExperience from "@/components/MyExperience.tsx";
import MyStack from "@/components/MyStack.tsx";
import ServicesSection from "@/components/home/ServicesSection.tsx";

const Home = () => {
    return (
        <Layout
            title="Ruphin - Software Engineering Student"
description="Ruphin's portfolio: a passionate Software Engineering student at IUT Douala. Skilled in React, Django, Python, Flutter, software maintenance, and AI-powered creative solutions, including logo and image generation. Building innovative, scalable, and reliable digital solutions."
keywords="Ruphin, Software Engineer, Student, React, Django, Python, Flutter, Software Maintenance, AI, Image Generation, Logo Creation, Web Development, Backend Development, Mobile Development, Africa Tech"
lang="en"

        >
            <HeroSection/>
            <AboutMe/>
            <ServicesSection/>
            <MyStack />
            <MyExperience/>
            <ContactForm/>
            {/*<CTA/>*/}
            {/*<div>*/}
            {/*    <CallToAction/>*/}
            {/*</div>*/}
        </Layout>

    );
};

export default Home;