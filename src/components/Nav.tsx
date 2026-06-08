"use client";

import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "Coaching", href: "#coaching" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ mixBlendMode: "difference" }}
    >
      <Link
        href="/"
        className="text-sm font-semibold tracking-widest uppercase"
        style={{ color: "#f5f4f0", fontFamily: "var(--font-sans)" }}
      >
        TC
      </Link>
      <ul className="flex gap-10">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm tracking-wider uppercase transition-opacity hover:opacity-50"
              style={{ fontFamily: "var(--font-sans)", color: "#f5f4f0" }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
