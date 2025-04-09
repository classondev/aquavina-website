"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ChevronDown, Menu, Search, Phone, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const mainNavItems = [
  {
    title: "Reiseziele",
    href: "/reiseziele",
    submenu: [
      { title: "Asien", href: "/reiseziele/asien-reisen" },
      { title: "Afrika", href: "/reiseziele/afrika-reisen" },
      { title: "Amerika", href: "/amerika-reisen" },
      { title: "Orient", href: "/orient-reisen" },
      { title: "Ozeanien", href: "/reiseziele/ozeanien" },
      { title: "Südeuropa", href: "/reiseziele/suedeuropa" },
      { title: "Ost- & Nordeuropa", href: "/ost-und-nordeuropa-reisen" },
      { title: "Deutschland & Österreich", href: "/reiseziele/deutschland-oesterreich" },
    ],
  },
  {
    title: "Reisefinder",
    href: "/reisefinder",
  },
  {
    title: "Reisethemen",
    href: "/reisethemen",
    submenu: [
      { title: "Rundreisen", href: "/rundreisen" },
      { title: "Fernreisen", href: "/fernreisen" },
      { title: "Europareisen", href: "/europa-reisen" },
      { title: "Städtereisen", href: "/staedtereisen" },
      { title: "Safari-Reisen", href: "/reisethemen/safari-reisen" },
      { title: "Studienreisen", href: "/studienreisen" },
    ],
  },
  {
    title: "So reisen wir",
    href: "/so-reisen-wir",
    submenu: [
      { title: "Kleine Gruppen - besser Reisen", href: "/kleine-gruppen-reisen" },
      { title: "Beste Preise - beste Qualität", href: "/beste-preise" },
      { title: "Ausgewählte Reiseleitung", href: "/reiseleiter" },
      { title: "Nachhaltig reisen", href: "/nachhaltig-reisen" },
      { title: "Reisevideos", href: "/reisevideos" },
      { title: "Bewertungen zu SKR Reisen", href: "/bewertungen" },
    ],
  },
  {
    title: "Über SKR Reisen",
    href: "/ueber-skr-reisen",
    submenu: [
      { title: "Warum SKR Reisen?", href: "/7-gruende-fuer-skr-reisen" },
      { title: "Das Original - Seit 1978", href: "/das-original" },
      { title: "Das Team", href: "/ueber-skr-reisen/team" },
      { title: "Kataloge kostenfrei bestellen", href: "/katalog" },
      { title: "Gutschein verschenken", href: "/gutschein" },
      { title: "Jobs", href: "/jobs" },
    ],
  }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container-skr py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-28">
              <div className="absolute font-bold text-secondary text-2xl">SKR</div>
              <div className="absolute top-6 text-sm text-secondary">Reisen</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {mainNavItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="group flex items-center text-secondary hover:text-primary px-2 py-2 text-sm font-medium">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white p-2 rounded-md shadow-lg min-w-[200px]">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className="w-full text-secondary hover:text-primary py-2"
                          >
                            {subItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-secondary hover:text-primary px-2 py-2 text-sm font-medium"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Secondary Navigation Items */}
            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-gray-200">
              <Link href="/newsletter-gluecksmomente" className="text-secondary hover:text-primary text-sm">
                Newsletter
              </Link>
              <Link href="/katalog" className="text-secondary hover:text-primary text-sm">
                Katalog
              </Link>
              <a
                href="tel:+49221933720"
                className="hidden xl:flex items-center text-secondary hover:text-primary text-sm"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span>0221 93372 0</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a href="tel:+49221933720" className="text-secondary hover:text-primary p-2">
              <Phone className="h-5 w-5" />
            </a>
            <button className="text-secondary hover:text-primary p-2">
              <Search className="h-5 w-5" />
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="text-secondary hover:text-primary p-2"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <div className="h-full flex flex-col">
                  <div className="p-4 flex justify-between items-center border-b">
                    <div className="font-bold text-secondary text-xl">SKR</div>
                    <SheetTrigger asChild>
                      <button
                        className="text-secondary hover:text-primary p-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </SheetTrigger>
                  </div>
                  <div className="flex-1 overflow-y-auto py-4 px-6">
                    <nav className="flex flex-col space-y-4">
                      {mainNavItems.map((item) => (
                        <div key={item.title} className="flex flex-col">
                          <Link
                            href={item.href}
                            className="text-secondary hover:text-primary font-medium py-2"
                          >
                            {item.title}
                          </Link>
                          {item.submenu && (
                            <div className="ml-4 mt-2 flex flex-col space-y-2">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="text-secondary hover:text-primary text-sm py-1"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <div className="border-t pt-4 mt-4">
                        <Link href="/newsletter-gluecksmomente" className="block text-secondary hover:text-primary py-2">
                          Newsletter
                        </Link>
                        <Link href="/katalog" className="block text-secondary hover:text-primary py-2">
                          Katalog
                        </Link>
                      </div>
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
