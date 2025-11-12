"use client";
import s from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${s.link} ${s.active}` : s.link}>
      {children}
    </Link>
  );
}
