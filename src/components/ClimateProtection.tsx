"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ClimateProtection() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container-skr">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <Image
              src="https://ext.same-assets.com/1651722201/1916988461.png"
              alt="Klimaschutz bei SKR Reisen"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-3">
              Klimaschutz bei SKR Reisen
            </h2>
            <p className="text-secondary mb-4">
              Für alle Reisen kompensieren wir unsere CO₂-Emissionen über zertifizierte Klimaschutzprojekte
              von ClimatePartner.
            </p>
            <Link
              href="/nachhaltig-reisen/klimaschutz-bei-skr-reisen"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              MEHR ZUM KLIMASCHUTZ
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
