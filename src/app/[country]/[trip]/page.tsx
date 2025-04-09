import { notFound } from "next/navigation";
import Image from "next/image";
import { trips } from "@/data/trip-details.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TripData {
  title: string;
  subtitle: string;
  duration: {
    days: number;
    nights: number;
  };
  price: {
    amount: number;
    includes: string[];
  };
  highlights: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
  }>;
  images: Array<{
    url: string;
    alt: string;
  }>;
}

interface Props {
  params: {
    country: string;
    trip: string;
  };
}

export default function TripDetailPage({ params }: Props) {
  const tripData = trips[params.trip] as TripData | undefined;

  if (!tripData) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <Image
          src={tripData.images[0].url}
          alt={tripData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-white">{tripData.title}</h1>
            <p className="mt-4 text-xl text-white">{tripData.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold">Highlights der Reise</h2>
              <ul className="mt-4 space-y-2">
                {tripData.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Reiseverlauf</h2>
              <Accordion type="single" collapsible>
                {tripData.itinerary.map((day, index) => (
                  <AccordionItem key={index} value={`day-${index + 1}`}>
                    <AccordionTrigger>
                      Tag {day.day}: {day.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      {day.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 rounded-lg border p-6 shadow-sm">
              <div className="text-2xl font-bold">
                ab €{tripData.price.amount}
              </div>
              <div className="mt-2 text-sm text-gray-600">
                {tripData.duration.days} Tage / {tripData.duration.nights} Nächte
              </div>

              <div className="mt-6">
                <h3 className="font-semibold">Im Preis enthalten:</h3>
                <ul className="mt-2 space-y-2">
                  {tripData.price.includes.map((item: string, index: number) => (
                    <li key={index} className="text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="mt-6 w-full">
                Jetzt anfragen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 