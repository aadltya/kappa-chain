import Image from "next/image";
import { Exo } from "next/font/google";
import React from "react";
import Link from "next/link";
import logo from "./../../../public/favicon-96x96.png"

const exoFont = Exo({
    subsets: ['latin'],
    weight: '600',
})

export function Navbar() {
  return (
    <nav className={`${exoFont.className} text-lg flex justify-between items-center px-20 py-4 bg-transparent backdrop-blur-sm fixed top-0 left-0 w-full z-50`}>
      <Link href="/">
        <Image 
          src={logo} 
          alt="logo"  
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </Link>

      <ul className="flex space-x-8">
        <li className="text-slate-400 hover:text-white cursor-pointer">CA</li>
        <li className="text-slate-400 hover:text-white cursor-pointer">
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className="text-slate-400 hover:text-white cursor-pointer">About</li>
        <li className="text-slate-400 hover:text-white cursor-pointer">Twitter</li>
        <li className="text-slate-400 hover:text-white cursor-pointer">Github</li>
      </ul>
    </nav>
  );
}
