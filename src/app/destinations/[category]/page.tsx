import { notFound } from "next/navigation";
import Image from "next/image";
import { popularTrips } from "@/data/destinations.json";

interface Props {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return popularTrips.categories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params }: Props) {
  const category = popularTrips.categories.find(
    (cat) => cat.slug === params.category
  );

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">{category.title}</h1>
            <p className="mt-4 text-xl">{category.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="prose max-w-none">
          <p className="text-xl">{category.description}</p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Beliebte Reiseziele</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.destinations.map((dest, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm"
                >
                  {dest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 