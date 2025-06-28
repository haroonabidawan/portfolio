'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-50 backdrop-blur-lg bg-black/50 border-b border-white/10">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-emerald-400">
                    Haroon.dev
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden sm:flex gap-6 text-sm">
                    {navLinks
                        .filter(link => link.href !== "/") // hide Home
                        .map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    "hover:text-emerald-400 transition-colors",
                                    pathname === href
                                        ? "text-emerald-400 underline underline-offset-4"
                                        : "text-gray-300"
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                </nav>


                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="sm:hidden text-gray-300 hover:text-emerald-400 transition"
                    aria-label="Open Menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Slide-In Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}<motion.aside
                            className="fixed top-0 left-0 w-full h-screen bg-[#0d1117] z-50 flex flex-col p-6"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween" }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl font-bold text-emerald-400">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white transition"
                                    aria-label="Close Menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-4 text-lg">
                                {navLinks.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "hover:text-emerald-400 transition-colors",
                                            pathname === href ? "text-emerald-400 underline underline-offset-4" : "text-gray-300"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.aside>


                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
