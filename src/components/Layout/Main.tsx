"use client";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
