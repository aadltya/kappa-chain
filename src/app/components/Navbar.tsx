import Image from "next/image";
import { Exo } from "next/font/google";
import React from "react";
import Link from "next/link";
import { Twitter, Github } from "lucide-react";
import logo from "./../../../public/favicon-96x96.png";

const exoFont = Exo({
    subsets: ['latin'],
    weight: '600',
});

export function Navbar() {
  return (
    <nav className={`${exoFont.className} text-lg flex justify-between items-center px-20 py-4 bg-transparent backdrop-blur-sm fixed top-0 left-0 w-full z-50`}>
      <Link href="/">
        <Image 
          src={logo} 
          alt="logo"  
          width={30}
          height={30}
          className="cursor-pointer rounded-lg"
        />
      </Link>

      <ul className="flex items-center space-x-8">
        <li className="text-white hover:text-slate-400 cursor-pointer">CA</li>
        <li className="text-white hover:text-slate-400 cursor-pointer">
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className="text-white hover:text-slate-400 cursor-pointer">About</li>
        <li className="text-white hover:text-slate-400 cursor-pointer">
          <Link href="https://x.com/Kappaa_Ai" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5" />
          </Link>
        </li>
        <li className="text-white hover:text-slate-400 cursor-pointer">
          <Link href="https://github.com/KappaAl" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}