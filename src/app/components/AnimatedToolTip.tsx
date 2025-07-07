"use client";
import React from "react";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";
import { people } from "../constants";

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center mb-10 w-[70vw] gap-3">
      <AnimatedTooltip items={people} />
    </div>
  );
}
 