import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Spotlight
        className="-top-40 right-0 md:-top-20 md:right-60 md:hidden" // changed 'left' to 'right'
        fill="white"
      />
    </div>
  );
}
