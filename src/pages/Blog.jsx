import React from "react";
import BlogCard from "../components/BlogCard";
import { useNavigate } from "react-router-dom";

// Slug generator to match blogData keys in BlogRedirect.jsx
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .replace(/ransomware.*/, "ransomware")
    .replace(/juice.*/, "juice")
    .replace(/social(-|.*engineering).*/, "social");
}

const posts = [
  {
    title: "Ransomware in 2025",
    excerpt: "A look at the latest ransomware tactics and how to defend against them.",
    author: "Agent Nullbyte",
    date: "May 2024",
    quote: "To break a firewall, you don't need code. You need curiosity.",
  },
  {
    title: "Juice Jacking at Airports: Fact or Fearmongering?",
    excerpt: "Is public USB charging really a threat? We break down the facts.",
    author: "Agent Cipher",
    date: "April 2024",
    quote: "Trust is the weakest link in any system.",
  },
  {
    title: "Hack the Human: Basics of Social Engineering",
    excerpt: "Social engineering is about hacking people, not machines. Learn the basics.",
    author: "Agent Rootkit",
    date: "March 2024",
    quote: "The best exploit is a convincing story.",
  },
];

export default function Blog() {
  const navigate = useNavigate();
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl text-green-400 font-mono mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => {
          const slug = slugify(post.title);
          return (
            <button
              key={post.title}
              className="block text-left w-full bg-transparent p-0 border-0 outline-none cursor-pointer"
              onClick={() => navigate(`/blog/${slug}`)}
              tabIndex={0}
              aria-label={`Read blog: ${post.title}`}
            >
              <BlogCard {...post} />
            </button>
          );
        })}
      </div>
      <div className="mt-12 text-xs text-gray-500 font-mono">
        <span>Markdown/MDX support and code highlighting coming soon.</span>
      </div>
    </main>
  );
}