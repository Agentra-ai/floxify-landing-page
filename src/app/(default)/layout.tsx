"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Metadata } from "next";
// import fff from "../../../public/floxify-logo.png"


const metadata : Metadata = {
  title: "Floxify",
  description: "GenAI platform",
  icons : {
    icon : "../../../public/floxify-logo.png",
  }
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="relative flex flex-col grow">{children}</main>
    </>
  );
}
