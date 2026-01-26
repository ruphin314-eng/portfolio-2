import Layout from "@/components/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, BookOpen, Calendar, User } from "lucide-react";
import { SiOpenai } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// BlogPost interface adapté
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: string;
  image?: string;
  tags: string[];
  readingTime?: number;
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
    image: "",
    tags: ["AI", "Logo Generation", "Image AI", "Python", "Automation"],
    readingTime: 5,
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
    tags: ["Maintenance", "Software Engineering", "Collaboration", "Version Control"],
    readingTime: 6,
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
    tags: ["Flutter", "Mobile Development", "Cross-Platform", "Dart"],
    readingTime: 7,
  },
];

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    const foundPost = mockPosts.find(p => p.id === Number(id));
    setPost(foundPost || null);
  }, [id]);

  useEffect(() => {
    if (post && contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3');
      const toc = Array.from(headings).map((heading, index) => {
        const level = parseInt(heading.tagName.substring(1));
        const text = heading.textContent || '';
        const headingId = heading.id || `section-${index}`;
        heading.id = headingId;
        return { id: headingId, text, level };
      });
      setTableOfContents(toc);
    }
  }, [post]);

  if (!post) {
    return (
      <Layout
        title="Blog Post Not Found | Ruphin Koding"
        description="The requested blog post could not be found."
        keywords="blog, article, not found, Ruphin Koding"
        lang="en"
      >
        <div className="min-h-screen flex items-center justify-center bg-background">
          <h1 className="text-3xl text-text-primary">Blog Post Not Found</h1>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout
      title={`${post.title} | Ruphin Koding Blog`}
      description={post.excerpt}
      keywords={post.tags.join(", ") + ", Ruphin Koding, blog, software engineering"}
      lang="en"
    >
      <section className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-glow transition-colors mb-8">
                <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
              </Link>

              {post.image ? (
                <div className="w-full h-80 overflow-hidden rounded-lg mb-8 shadow-lg">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full h-80 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg mb-8">
                  <SiOpenai className="w-12 h-12 text-primary" />
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center text-text-secondary text-sm mb-8 space-x-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" /> <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> <span>{formatDate(post.publishedAt)}</span>
                </div>
                {post.readingTime && (
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" /> <span>{post.readingTime} min read</span>
                  </div>
                )}
                <Badge variant="secondary" className="text-xs">{post.category}</Badge>
              </div>

              <div 
                className="prose prose-invert max-w-none text-text-secondary leading-relaxed"
                ref={contentRef}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-10 border-t border-border pt-6">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs px-3 py-1">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Author Card */}
              <Card className="bg-gradient-card border border-border-light mt-10 p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-bold text-text-primary">About the Author</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex items-center">
                  <img 
                    src="/blog-avatar.jpg"
                    alt="Ruphin Koding Avatar"
                    className="w-16 h-16 rounded-full mr-4 border-2 border-primary"
                  />
                  <div>
                    <p className="font-semibold text-text-primary">Ruphin Koding</p>
                    <p className="text-sm text-text-secondary">Student & Aspiring Software Engineer</p>
                    <p className="text-sm text-text-muted mt-1">Passionate about AI, Flutter, software maintenance, and building scalable applications. Shares insights and tutorials for students and developers.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockPosts.filter(p => p.id !== post.id).slice(0, 2).map((rel) => (
                    <Card key={rel.id} className="bg-gradient-card border border-border-light p-4">
                      <h3 className="font-semibold text-text-primary">{rel.title}</h3>
                      <p className="text-sm text-text-secondary">{rel.excerpt}</p>
                      <Link to={`/blog/${rel.id}`} className="text-primary text-sm mt-2 inline-block">Read More &rarr;</Link>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="lg:col-span-1">
              {tableOfContents.length > 0 && (
                <Card className="bg-gradient-card border border-border-light p-6 sticky top-24">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-bold text-text-primary">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2">
                    {tableOfContents.map(item => (
                      <a 
                        key={item.id} 
                        href={`#${item.id}`}
                        className={`block text-text-secondary hover:text-primary transition-colors ${item.level === 3 ? 'ml-4 text-sm' : 'text-base'}`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPostDetail;
