"use client";

import Link from "next/link";
// import Logo from "./logo";
import FloxifyLogo from "@/public/floxify-logo.png"
import Image from "next/image";
// import fff from "../../../public/floxify-logo.png"


export default function Header() {
  return (
    <header className="z-30 w-full mt-2 md:mt-5">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex items-center flex-1 gap-1 text-xl font-bold text-white">
          <Image src={FloxifyLogo} alt="Floxify Logo" width={40} height={40} />
          Floxify.ai
          </div>

          {/* Desktop sign in links */}
          <ul className="flex items-center justify-end flex-1 gap-3">
            <li>
                <Link
                href="https://www.floxify.ai/signin"
                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
                >
                Sign In
                </Link>
            </li>
            <li>
                <Link
                href="https://www.floxify.ai/signup"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                >
                Register
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
