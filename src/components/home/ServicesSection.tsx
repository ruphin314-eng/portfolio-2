import { Code, Database, Globe, Monitor, Palette, Smartphone } from "lucide-react";
import { SiOpenai } from "react-icons/si";
import { AppearOnScroll, ScaleTextEffect } from "@/components/ScrollEffect.tsx";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
  {
    icon: Database,
    title: "Backend Solutions",
    description:
      "Designing and implementing robust backend systems using Django and Python to ensure reliable data management and scalable applications.",
  },
  {
    icon: Code,
    title: "Custom Coding",
    description:
      "Writing clean, efficient, and maintainable code in Python, React, and Flutter to deliver high-performance software solutions.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web development with React and Django, creating responsive and scalable web applications tailored to user needs.",
  },
  {
    icon: Monitor,
    title: "Desktop Development",
    description:
      "Developing desktop applications with Python that are reliable, secure, and optimized for seamless user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Building responsive and efficient mobile applications using Flutter, ensuring smooth performance across devices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing interfaces to provide a smooth and engaging experience across web and mobile projects.",
  },
  {
  icon: SiOpenai,
  title: "AI & Image/Logo Generation",
  description:
    "Creating intelligent solutions with AI, including automated image and logo generation, smart features, and creative digital assets for modern applications.",
},
];

    //   {
    //       icon: Heart,
    //       title: "SEO & search",
    //       description: "Globe",
    //   },

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2 title1">my services</p>

          <ScaleTextEffect>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 title3">
              What I do?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto title2">
              Passionate about creating innovative digital solutions. Here's
              what I can do for you.
            </p>
          </ScaleTextEffect>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AppearOnScroll>
                <Card
                  key={index}
                  className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3 title3">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed title2">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </AppearOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
