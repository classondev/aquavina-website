"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { companyInfo, links, social } from "@/data/footer.json"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">{companyInfo.name}</h3>
            <address className="mt-4 not-italic">
              {companyInfo.address}<br />
              {companyInfo.city}, {companyInfo.country}<br />
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a><br />
              <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
            </address>
          </div>

          {Object.entries(links).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-bold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-gray-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              {Object.entries(social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="capitalize">{platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
