"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
const blogs = [
  {
    category: "SEO",
    readTime: "5 min read",
    title: "10 SEO Trends That Will Dominate in 2026",
    excerpt:
      "Stay ahead of the curve with these emerging SEO strategies that every digital marketer should know about.",
    author: "SCAL UP Team",
    date: "January 10, 2026",
  },
  {
    category: "Paid Ads",
    readTime: "8 min read",
    title: "The Complete Guide to Meta Ads for Beginners",
    excerpt:
      "Learn how to create effective Facebook and Instagram ads that convert, from audience targeting to creatives.",
    author: "SCAL UP Team",
    date: "January 8, 2026",
  },
  {
    category: "Content",
    readTime: "6 min read",
    title: "Content Marketing Strategies That Actually Work",
    excerpt:
      "Discover proven content marketing tactics that help build brand awareness and drive organic traffic.",
    author: "SCAL UP Team",
    date: "January 5, 2026",
  },
  {
    category: "Career",
    readTime: "7 min read",
    title: "How to Build a Successful Career in Digital Marketing",
    excerpt:
      "A comprehensive roadmap for students and professionals looking to break into the digital marketing industry.",
    author: "SCAL UP Team",
    date: "January 3, 2026",
  },
  {
    category: "Analytics",
    readTime: "10 min read",
    title: "Google Analytics 4: Everything You Need to Know",
    excerpt:
      "Master GA4 with this complete guide covering setup, configuration, and advanced tracking features.",
    author: "SCAL UP Team",
    date: "January 1, 2026",
  },
  {
    category: "SEO",
    readTime: "6 min read",
    title: "Local SEO: Dominating Your Geographic Market",
    excerpt:
      "Learn how to optimize your business for local search and attract customers in your area.",
    author: "SCAL UP Team",
    date: "December 28, 2025",
  },
];

export default function BlogPage() {
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

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={index}
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
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs mb-3">
                    <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full font-medium">
                      {blog.category}
                    </span>
                    <span className="text-gray-400">{blog.readTime}</span>
                  </div>

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
                      {blog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-5 flex items-center gap-2 text-orange-500 font-medium text-sm hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
