import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Bookmark,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import heroImage from "@/assets/bloghero.png";
import { getBlogBySlug } from "@/lib/bot";

/* ================= TYPES ================= */

interface BlogPostType {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: string;
  image: string;
}

/* ================= COMPONENT ================= */

export default function BlogPost() {
  const { slug } = useParams();

  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);

        const data = await getBlogBySlug(slug);

        setPost({
          id: data._id,
          slug: data.slug,
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          author: {
            name: "SCAL UP Team",
            role: "Digital Marketing Experts",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
          },
          date: new Date(data.createdAt).toLocaleDateString(),
          readTime: `${Math.ceil(data.content.length / 800)} min read`,
          category: "Digital Marketing",
          image: heroImage,
        });

        // SEO title
        document.title = `${data.title} | SCALUP Blog`;
      } catch (err) {
        console.error(err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <BlogSkeleton />;

  if (!post)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Post not found
      </div>
    );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ================= HERO ================= */}
      <header className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="outline">{post.category}</Badge>
              <span className="flex items-center text-muted-foreground text-sm gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

            <div className="flex items-center justify-between border-t pt-6">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24">
        {/* Share Sidebar */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 flex lg:flex-col gap-3">
            <Button variant="outline" size="icon">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="w-4 h-4" />
            </Button>
            <Separator className="hidden lg:block" />
            <Button variant="ghost" size="icon">
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

/* ================= SKELETON ================= */

function BlogSkeleton() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-6">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-14 w-3/4" />
        <Skeleton className="h-6 w-full max-w-2xl" />
        <div className="flex gap-4 pt-8">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="pt-12 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </div>
    </div>
  );
}
