"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, TruckIcon, LocationIcon } from "./icons";
import React from "react";

// Simple home icon SVG
const HomeIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7" />
    <path d="M9 22V12h6v10" />
  </svg>
);

type IconComponent = (props: { className?: string }) => JSX.Element;

interface TabItem {
  label: string;
  href: string;
  icon: IconComponent;
}

export default function MobileTabBar() {
  const pathname = usePathname();

  const tabs: TabItem[] = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Services", href: "/services", icon: TruckIcon },
    { label: "About", href: "/about", icon: LocationIcon },
    { label: "Contact", href: "/contact", icon: PhoneIcon },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-[2000] bg-slate-800/95 backdrop-blur-lg border-t border-slate-600/40 md:hidden">
      <ul className="flex">
        {tabs.map((tab) => {
          const active = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                className={`flex flex-col items-center justify-center py-2 text-xs font-fustat transition-colors ${active ? "text-primary" : "text-gray-300"}`}
              >
                {React.createElement(tab.icon, { className: `w-6 h-6 mb-1 ${active ? 'text-primary' : 'text-gray-300'}` })}
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
