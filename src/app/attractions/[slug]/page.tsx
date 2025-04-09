import { notFound } from "next/navigation"
import { attractions } from "@/data/attractions.json"

interface Props {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return attractions.map((attraction) => ({
    slug: attraction.slug,
  }))
}

export default function AttractionPage({ params }: Props) {
  const attraction = attractions.find(
    (attraction) => attraction.slug === params.slug
  )

  if (!attraction) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <img
            src={attraction.image}
            alt={attraction.title}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{attraction.title}</h1>
          <p className="mt-4 text-lg">{attraction.fullDescription}</p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Features:</h3>
            <ul className="mt-2 space-y-2">
              {attraction.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-bold">€{attraction.price}</p>
            <p className="text-gray-600">Duration: {attraction.duration}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 