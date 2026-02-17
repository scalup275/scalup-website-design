"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAllBlogs } from "@/lib/bot";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBlogs()
      .then(setBlogs)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Header />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Digital Marketing{" "}
              <span className="text-orange-500">Insights</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Stay updated with the latest trends, tips, and strategies in
              digital marketing.
            </p>
          </motion.div>

          {/* Loading */}
          {loading && (
            <p className="text-center text-gray-500">Loading blogs...</p>
          )}

          {/* Blog Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.article
                  key={blog._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="h-44 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-xl shadow flex items-center justify-center text-orange-500">
                      ✍️
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="font-bold text-lg leading-snug mb-2">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5" />
                        SCAL UP Team
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-orange-500 font-medium text-sm hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
