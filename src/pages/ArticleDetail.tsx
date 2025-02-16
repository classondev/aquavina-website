
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

const articles = {
  "1": {
    title: "Exploring Hidden Mountain Trails",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    category: "Adventure",
    description: "Discover untouched natural beauty and breathtaking views on these secret mountain paths.",
    content: `Experience the thrill of discovering hidden mountain trails that few have ventured to explore. These pristine paths offer not just a journey through nature, but a journey of self-discovery.

From the crisp mountain air to the panoramic views that stretch as far as the eye can see, every step brings new wonders to behold. The trails wind through ancient forests, past cascading waterfalls, and along ridge lines that touch the clouds.

Whether you're an experienced hiker or just beginning your outdoor adventures, these trails offer something for everyone. Each path has been carefully documented with difficulty ratings, estimated completion times, and points of interest along the way.`,
  },
  "2": {
    title: "Night Sky Photography Guide",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    category: "Photography",
    description: "Learn how to capture stunning photographs of the starry night sky in remote locations.",
    content: `Unlock the secrets of capturing the night sky in all its glory. This comprehensive guide will walk you through everything you need to know about astrophotography.

From choosing the right equipment to finding the perfect location, we cover all the essential aspects of night sky photography. Learn about camera settings, composition techniques, and post-processing tips that will help you create stunning celestial images.

Discover the best times and locations for capturing different celestial events, from meteor showers to the Milky Way. Whether you're a beginner or an experienced photographer, these insights will help you take your night photography to the next level.`,
  },
  // ... add more articles
};

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles[id as keyof typeof articles];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Image */}
        <div className="relative h-[60vh] w-full">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <span className="px-4 py-2 bg-primary rounded-full text-sm mb-4 inline-block">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4 max-w-4xl">
                {article.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
