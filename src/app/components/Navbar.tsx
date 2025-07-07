"use client";
import React from "react";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
import { navItems } from "../constants";

export function FloatingNavDemo() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return <div></div>;
};
