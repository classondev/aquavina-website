
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ArticleCard from "@/components/ArticleCard";

const articles = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Exploring Hidden Mountain Trails",
    description: "Discover untouched natural beauty and breathtaking views on these secret mountain paths.",
    category: "Adventure",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    title: "Night Sky Photography Guide",
    description: "Learn how to capture stunning photographs of the starry night sky in remote locations.",
    category: "Photography",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    title: "River Valley Escapes",
    description: "Experience the serenity of nature in these picturesque river valley destinations.",
    category: "Nature",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Ancient Bridge Tales",
    description: "Uncover the history and legends behind these remarkable architectural marvels.",
    category: "History",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-primary/10 via-white to-white">
        <div className="container mx-auto px-4 pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Discover Your Next Adventure
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in">
              Explore unique destinations, create unforgettable memories, and embark on journeys that last a lifetime.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors animate-fade-in">
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
