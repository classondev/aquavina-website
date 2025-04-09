"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Users, Star } from "lucide-react";
import { popularTrips } from "@/data/destinations.json";

export default function PopularDestinations() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">
          {popularTrips.sectionTitle}
        </h2>

        {/* Categories */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {popularTrips.categories.map((category) => (
            <Link
              key={category.id}
              href={`/destinations/${category.slug}`}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
                <p className="text-white/90 mt-2">{category.subtitle}</p>
                <p className="text-white/80 text-sm mt-1">{category.description}</p>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.destinations.map((dest, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Destinations */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {popularTrips.featuredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{destination.title}</h3>
                    <p className="text-sm text-gray-600">{destination.subtitle}</p>
                  </div>
                  {destination.bestseller && (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                      Bestseller
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{destination.description}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{destination.guests}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {destination.days} Tage
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="text-lg font-bold">
                  ab €{destination.price}
                </div>
                <Button asChild>
                  <Link href={destination.href}>
                    Mehr erfahren
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
