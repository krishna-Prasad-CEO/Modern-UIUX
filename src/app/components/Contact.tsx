"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/stateful-button";

export function StatefulButtonDemo() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      window.location.href = "mailto:krishnaprasadandco12@gmail.com";
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex h-40 w-full items-center justify-center">
      <Button onClick={handleClick}>Contact me</Button>
    </div>
  );
}
