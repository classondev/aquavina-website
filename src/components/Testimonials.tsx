"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";
import { testimonials, sectionTitle } from "@/data/testimonials.json"

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">{sectionTitle}</h2>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4">{testimonial.comment}</p>
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
