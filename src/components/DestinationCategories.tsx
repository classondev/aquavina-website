"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";

const categories = [
  {
    id: "fernreisen",
    title: "FERNREISEN",
    href: "/fernreisen",
    imageSrc: "https://ext.same-assets.com/1651722201/1816027597.jpeg",
    description: "Entdecken Sie exotische Ziele und ferne Länder",
  },
  {
    id: "europa",
    title: "EUROPA",
    href: "/europa-reisen",
    imageSrc: "https://ext.same-assets.com/1651722201/2738192171.jpeg",
    description: "Erkunden Sie die Vielfalt des europäischen Kontinents",
  },
  {
    id: "bestseller",
    title: "BESTSELLER",
    href: "/unsere-beliebtesten-urlaubsziele",
    imageSrc: "https://ext.same-assets.com/1651722201/1041564741.jpeg",
    description: "Unsere beliebtesten Reiseangebote",
  },
];

export default function DestinationCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-skr">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card className="overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-md group">
                <CardContent className="p-0 relative h-60">
                  <Image
                    src={category.imageSrc}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-200">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
