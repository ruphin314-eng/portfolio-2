import Layout from "@/components/layout/layout";
import { ArrowRight, Calendar, Search, User } from "lucide-react";
import { useState } from "react";
import { SiOpenai } from "react-icons/si";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  image: string;
  tags: string[];
}

// Mock posts adaptés à ton profil
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI-Powered Logo & Image Generation",
    excerpt: "Exploring AI techniques for automated logo creation and image generation, enhancing productivity and design workflows.",
    content: `<p>Using AI tools like DALL·E and Stable Diffusion, developers and designers can generate logos, icons, and illustrations efficiently. This article covers integrating AI into creative workflows, fine-tuning prompts, and producing high-quality assets programmatically.</p>`,
    category: "AI",
    author: "Ruphin Koding",
    publishedAt: "2025-06-15",
    image: "", // placeholder IA
    tags: ["AI", "Logo Generation", "Image AI", "Python", "Automation"]
  },
  {
    id: 2,
    title: "Software Maintenance Practices for Student Projects",
    excerpt: "A deep dive into best practices for maintaining software systems in collaborative student projects.",
    content: `<p>This guide covers version control, bug tracking, and documentation strategies to ensure long-term maintainability of software projects, even in educational settings.</p>`,
    category: "Maintenance",
    author: "Ruphin Koding",
    publishedAt: "2025-05-20",
    image: "",
    tags: ["Maintenance", "Software Engineering", "Collaboration", "Version Control"]
  },
  {
    id: 3,
    title: "Advanced Flutter App Development",
    excerpt: "Creating scalable and performant mobile applications with Flutter, focusing on clean architecture and cross-platform optimization.",
    content: `<p>We explore state management, widget composition, and performance optimization strategies to build robust Flutter applications for iOS and Android.</p>`,
    category: "Development",
    author: "Ruphin Koding",
    publishedAt: "2025-04-10",
    image: "",
    tags: ["Flutter", "Mobile Development", "Cross-Platform", "Dart"]
  },

];

const Blog = () => {
  const [posts] = useState<BlogPost[]>(mockPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI", "Maintenance", "Development", "DevSecOps", "Flutter"];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout
      title="Blog - Ruphin Koding | AI, Maintenance & Software Engineering Insights"
      description="Explore Ruphin Koding's insights on AI, software maintenance, Flutter development, and DevSecOps practices."
      keywords="blog, AI, software maintenance, Flutter, DevSecOps, logo generation, image AI, web development, Ruphin Koding"
      lang="en"
    >
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 title3">
              Technical Blog
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto title1">
              Dive into my insights on AI, software maintenance, Flutter development, and advanced engineering practices.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border-light"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-primary border-0" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Card key={post.id} className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center">
                    {post.image ? (
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center flex flex-col items-center justify-center">
                        <SiOpenai className="w-12 h-12 text-primary mb-2" />
                        <p className="text-text-muted text-sm">AI Generated Image</p>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                      <div className="flex items-center text-text-muted text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-text-primary group-hover:text-primary transition-smooth line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-text-secondary mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-text-muted">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="group/btn">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full text-text-muted">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No articles found.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
