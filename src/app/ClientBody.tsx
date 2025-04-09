"use client";

import { useEffect, useState } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use a state to track client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <body
      className="antialiased"
      suppressHydrationWarning
    >
      {children}
    </body>
  );
}
