"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

export function TextGenerateEffectDemo({text}:{text:string}) {
  return <TextGenerateEffect words={text} />;
}
