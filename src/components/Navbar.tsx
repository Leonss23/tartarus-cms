"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLElement> {}

export function Navbar({ ...props }: Props) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center ", props.className)} {...props}>
      {routes.map((route, idx) => (
        <Link
          key={`route${idx}`}
          href={route.href}
          className={cn(
            "", // TODO: add base styles to navbar links
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
