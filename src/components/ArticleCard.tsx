
import { Link } from "react-router-dom";

interface ArticleCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
}

const ArticleCard = ({ id, image, title, description, category }: ArticleCardProps) => {
  return (
    <Link to={`/article/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
