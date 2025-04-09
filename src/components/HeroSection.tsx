"use client";

import React from "react";
import Image from "next/image";
import { Select } from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { hero } from "@/data/hero.json"

export default function HeroSection() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${hero.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-white">{hero.title}</h1>
        <p className="mt-4 text-xl text-white">{hero.subtitle}</p>
        
        <div className="mt-8">
          <input
            type="text"
            placeholder={hero.searchPlaceholder}
            className="w-full max-w-md rounded-lg px-4 py-2"
          />
        </div>

        <div className="mt-6 flex items-center gap-2">
          <div className="rounded-lg bg-white px-3 py-2">
            <span className="text-xl font-bold">{hero.ratings.score}</span>
            <span className="ml-2 text-sm">{hero.ratings.platform}</span>
            <p className="text-sm text-gray-600">{hero.ratings.totalReviews} reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}
