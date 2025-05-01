"use client";

import { BLOG_POSTS } from "@/constants";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Eye,
  FileText,
  Heart,
  MessageSquare,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const BlogContent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Featured blog post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={BLOG_POSTS[0].image || "/placeholder.svg"}
              alt={BLOG_POSTS[0].title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <Badge className={`mb-3 `}>{BLOG_POSTS[0].category}</Badge>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {BLOG_POSTS[0].title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{BLOG_POSTS[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-zinc-400 mb-4">{BLOG_POSTS[0].description}</p>
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                className={`text-primary px-0 flex items-center gap-1`}
              >
                Read Article <ChevronRight size={16} />
              </Button>
              <div className="flex items-center gap-4 text-zinc-500 text-sm">
                <div className="flex items-center gap-1">
                  <MessageSquare size={14} />
                  <span>{BLOG_POSTS[0].comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={14} />
                  <span>{BLOG_POSTS[0].likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{BLOG_POSTS[0].views}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog post list */}
        <div className="space-y-6">
          {BLOG_POSTS.slice(1).map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl overflow-hidden p-4 hover:bg-zinc-800/30 transition-colors"
            >
              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <Badge className={`mb-2 `}>{post.category}</Badge>
                <h3 className="font-medium text-zinc-200 mb-1 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-400 mb-2 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-primary p-0`}
                  >
                    <FileText size={14} />
                    <span className="sr-only">Read article</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 flex items-center gap-2"
            >
              View All Articles <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogContent;
