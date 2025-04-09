"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <Image
          src={images[activeImage].url}
          alt={images[activeImage].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg ${
              index === activeImage ? "ring-2 ring-primary" : ""
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 