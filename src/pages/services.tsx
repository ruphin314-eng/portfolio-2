import Layout from "@/components/layout/layout";
import MyStack from "@/components/MyStack.tsx";
import { ArrowRight, CheckCircle, Code, Database, Globe, Monitor, Smartphone } from "lucide-react";
import { SiOpenai } from "react-icons/si";
import { AppearOnScroll } from "@/components/ScrollEffect.tsx";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "Backend Systems & APIs",
    description:
      "Building robust backend systems using Django and Python, ensuring reliable data management and scalable architectures with maintenance support.",
    features: [
      "Secure REST/GraphQL APIs",
      "Authentication & User Management (JWT, OAuth)",
      "Database integration (PostgreSQL, SQLite)",
      "Maintenance and optimization of existing systems",
    ],
    price: "Custom solutions tailored to project needs",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description:
      "Developing responsive web applications with React and Django, focusing on maintainability and high performance.",
    features: [
      "Responsive web platforms",
      "Progressive Web Apps (PWAs)",
      "API integration & orchestration",
      "Administrative dashboards",
      "Software bug fixes and updates",
    ],
    price: "Pricing adapted to project scope",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    description:
      "Creating mobile applications with Flutter for both iOS and Android with optimized performance.",
    features: [
      "iOS/Android development",
      "Native-like UI experience",
      "Performance and resource optimization",
      "Maintenance of existing apps",
    ],
    price: "Pricing adapted to project scope",
  },
  {
    icon: Monitor,
    title: "Custom Desktop Applications",
    description:
      "Developing desktop software tailored to user needs using Python or Java, with focus on usability and database integration.",
    features: [
      "Intuitive user interfaces",
      "Secure database connectivity",
      "Data management and reporting",
      "Maintenance and updates of legacy software",
    ],
    price: "Quoted per project complexity",
  },
  {
    icon: SiOpenai,
    title: "AI & Creative Solutions",
    description:
      "Leveraging AI for intelligent solutions, including automated image/logo creation, content generation, and smart digital features.",
    features: [
      "AI-assisted logo and image generation",
      "Smart content generation",
      "Automated workflows and features",
      "Creative digital assets",
    ],
    price: "Custom solutions based on project scope",
  },
  {
    icon: Globe,
    title: "Optimization & Performance",
    description:
      "Improving application performance, stability, and user experience.",
    features: [
      "Technical SEO optimization",
      "Core Web Vitals monitoring",
      "Analytics integration",
      "Ongoing maintenance and monitoring",
    ],
    price: "",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Project Planning & Ideation",
    description:
      "Understanding project goals and defining the technical scope for web, mobile, desktop, or AI solutions.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Creating wireframes, UI/UX layouts, and system architecture plans for scalable and maintainable applications.",
  },
  {
    step: "03",
    title: "Development & Implementation",
    description:
      "Coding applications with React, Django, Python, Flutter, and AI-powered features, including testing and integration.",
  },
  {
    step: "04",
    title: "Testing, Deployment & Maintenance",
    description:
      "Performing testing, debugging, deployment, and ongoing maintenance of applications to ensure long-term reliability.",
  },
];

const Services = () => {
  return (
    <Layout
      title="Services - Ruphin - Web, Mobile, Desktop & AI Solutions | Portfolio"
      description="Explore my services in backend systems, full-stack development, cross-platform apps, desktop software, AI solutions, and optimization."
      keywords="Ruphin, services, web development, mobile apps, desktop software, AI, backend, full-stack, Django, React, Flutter"
    >
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <MyStack />

          {/* Expertise Domains */}
          <AppearOnScroll>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
                My Expertise Domains
              </h1>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                Comprehensive digital solutions delivered with precision, architecture, and reliability.
              </p>
            </div>
          </AppearOnScroll>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group h-full"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-primary">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-text-primary mb-2 title3">
                      {service.title}
                    </CardTitle>
                    <p className="text-text-secondary title2">{service.description}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-6 title1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="text-primary font-semibold mb-4 title1">{service.price}</p>
                      <Button
                        variant="outline"
                        className="w-full group/btn border-border-light hover:border-primary hover:bg-primary/10"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Steps */}
          <div className="mb-20">
            <AppearOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3">
                  My Structured Workflow
                </h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
                  A robust, four-step approach engineered to ensure project success.
                </p>
              </div>
            </AppearOnScroll>

            <AppearOnScroll>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((process, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border-light shadow-card text-center group"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                        <span className="text-primary-foreground font-bold text-lg">{process.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-3">{process.title}</h3>
                      <p className="text-text-secondary">{process.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AppearOnScroll>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-card rounded-2xl p-12 border border-border-light shadow-card">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to Engineer Your Next Project?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Let’s discuss your system requirements and map out the solution that brings your ideas to fruition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth"
              >
                <a href="/contact">Start a Project</a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border-light hover:border-primary hover:bg-primary/10"
              >
                <a href="https://wa.me/237651217500" target="_blank" rel="noopener noreferrer">
                  Connect on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
